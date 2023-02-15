import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "../../utils/helper";
import Search from "../../components/Search";
import BondCard from "../../components/BondCard";
import notFoundIcon from "../../constants/icons/ic_data_not_found.svg";
import {
  Container,
  ContainerHeader,
  ContainerBody,
  ContainerHr,
  ContainerNotFound,
  Hr,
} from "./style";
import Overall from "../../components/Overall";
import BondDetail from "../../components/BondDetail";
import ChartHistory from "../../components/ChartHistory";

import { useGetBond, useSearchBond } from "../../services/home/home-query";
import {
  GetBondResponse,
  SearchBondPagingResponse,
  SearchBondResponse,
} from "../../services/home/home-types";
import { ItemSearchListType } from "../../components/Search/component/ListSearch.tsx/type";
import {
  ButtonGroupValueType,
  PeriodType,
} from "../../components/common/ButtonGroup/type";
import lodash from "lodash";
import Text from "../../components/common/Text";

const mapSearchDataApiToComponent = (
  searchBond: SearchBondPagingResponse[]
) => {
  const result = searchBond?.map(
    (responseWithpaging: SearchBondPagingResponse) => {
      const { data } = responseWithpaging;
      return data?.map((d: SearchBondResponse) => {
        const { thaiSymbol, nameTh } = d;
        return { name: thaiSymbol, description: nameTh };
      });
    }
  );

  return lodash.flatten(result);
};

const Home = () => {
  const router = useRouter();
  const [data, setData] = useState<GetBondResponse>();
  const [q, setQ] = useState("");
  const [thaiSymbol, setThaiSymbol] = useState(router.query.symbol || "");
  const [isDataAvailable, setIsDataAvailable] = useState(true);
  const [showComponents, setShowComponents] = useState(true);
  const [buttonGroupValue, setButtonGroupValue] = useState<
    ButtonGroupValueType[]
  >([
    { label: "1 สัปดาห์", value: "past_1_week", isDefault: false },
    { label: "1 เดือน", value: "past_1_month", isDefault: false },
    { label: "3 เดือน", value: "past_3_months", isDefault: false },
  ]);
  const [period, setPeriod] = useState<PeriodType>(buttonGroupValue[1].value);
  const [valueSearch, setValueSearch] = useState<
    ItemSearchListType[] | undefined
  >([]);

  const {
    data: searchBond,
    fetchNextPage,
    isFetched,
    isFetchingNextPage,
    hasNextPage,
  } = useSearchBond(q);
  const { mutate: getBond } = useGetBond();
  useEffect(() => {
    const newData = mapSearchDataApiToComponent(searchBond?.pages || []);
    setValueSearch(newData);
  }, [searchBond]);

  const updateButtonGroupValue = useCallback(() => {
    const yieldPriceAmount = data?.yieldPrices.length ?? 0;
    const buttonGroupArr = [...buttonGroupValue];
    buttonGroupArr[1].value = "past_1_month";
    buttonGroupArr[2].value = "past_3_months";
    if (yieldPriceAmount > 30) {
      buttonGroupArr[1].isDefault = true;
      setPeriod(buttonGroupValue[1].value);
    } else if (yieldPriceAmount > 7) {
      buttonGroupArr[1].isDefault = true;
      buttonGroupArr[2].value = null;
      setPeriod(buttonGroupValue[1].value);
    } else {
      buttonGroupArr[0].isDefault = true;
      buttonGroupArr[1].value = null;
      buttonGroupArr[2].value = null;
      setPeriod(buttonGroupValue[0].value);
    }
    setButtonGroupValue(buttonGroupArr);
  }, [buttonGroupValue, data?.yieldPrices.length]);

  useEffect(() => {
    if (period && thaiSymbol) {
      getBond(
        {
          period,
          thaiSymbol,
        },
        {
          onSuccess: (data) => {
            setData(data);
            updateButtonGroupValue();
            setShowComponents(true);
            setIsDataAvailable(true);
          },
          onError: (response) => {
            setIsDataAvailable(false);
            console.log("response error", response);
          },
        }
      );
    } else {
      setShowComponents(true);
      setIsDataAvailable(false);
    }
  }, [
    getBond,
    period,
    thaiSymbol,
    setShowComponents,
    setIsDataAvailable,
    setData,
  ]);

  const scrollProp = useMemo(() => {
    return {
      hasNextPage,
      isLoading: isFetchingNextPage,
      isFetched,
      onScroll: fetchNextPage,
    };
  }, [hasNextPage, isFetched, fetchNextPage, isFetchingNextPage]);

  const showComponentsWithData = useMemo(() => {
    return showComponents && isDataAvailable;
  }, [showComponents, isDataAvailable]);

  const onChangeShowComopnent = useCallback(
    (value: boolean) => {
      setShowComponents(value);
    },
    [setShowComponents]
  );

  const onSelectedChartHistory = useCallback(
    (period: string) => {
      setPeriod(period);
    },
    [setPeriod]
  );

  const onValueChange = useCallback(
    (selectedValue: string) => {
      setThaiSymbol(selectedValue);
    },
    [setThaiSymbol]
  );

  const onSearchChange = useCallback(
    (value: string) => {
      setQ(value);
    },
    [setQ]
  );

  return (
    <Container>
      <ContainerHeader>
        <Search
          valueSearch={valueSearch || []}
          onSearch={onSearchChange}
          onSelected={onValueChange}
          scrollProp={scrollProp}
          setShowComponents={onChangeShowComopnent}
          showComponents={showComponents}
        />
        {showComponentsWithData && (
          <BondCard
            title={data?.thaiSymbol || ""}
            description={data?.nameTh || ""}
            interestRate={data?.couponRate || ""}
            rateType={data?.couponPayment || ""}
            imageUrl={data?.issuerImageUrl}
          />
        )}
      </ContainerHeader>
      {showComponentsWithData && (
        <ContainerBody>
          <ChartHistory
            buttonGroupValue={buttonGroupValue}
            data={data?.yieldPrices}
            onSelected={onSelectedChartHistory}
          />
          <ContainerHr>
            <Hr />
          </ContainerHr>
          <Overall values={data?.overallAvg || []} />
          <BondDetail detail={data} />
        </ContainerBody>
      )}
      {showComponents && !isDataAvailable ? (
        <ContainerNotFound>
          <img width="221" height="144" src={notFoundIcon} alt="not found" />
          <Text>ไม่พบหุ้นกู้ที่คุณค้นหาในตลาดรอง</Text>
        </ContainerNotFound>
      ) : null}
    </Container>
  );
};

export default Home;
