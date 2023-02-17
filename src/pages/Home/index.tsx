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

import { ButtonGroupValue } from "../../components/ChartHistory/type";
import { useGetBond, useSearchBond } from "../../services/home/home-query";
import {
  GetBondResponse,
  SearchBondPagingResponse,
  SearchBondResponse,
} from "../../services/home/home-types";
import { ItemSearchListType } from "../../components/Search/component/ListSearch.tsx/type";
import { ButtonGroupValueType } from "../../components/common/ButtonGroup/type";
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
const getButtonGroupDefaultValue = (): ButtonGroupValueType[] => {
  return [
    {
      label: "1 สัปดาห์",
      value: ButtonGroupValue.ONE_WEEK,
      isDefault: false,
      isDisable: false,
    },
    {
      label: "1 เดือน",
      value: ButtonGroupValue.ONE_MONTH,
      isDefault: true,
      isDisable: false,
    },
    {
      label: "3 เดือน",
      value: ButtonGroupValue.THREE_MONTH,
      isDefault: false,
      isDisable: false,
    },
  ];
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
  >(getButtonGroupDefaultValue());
  const [period, setPeriod] = useState<string | undefined>("past_1_month");
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
    let overallAvgAmount = 0;
    data?.overallAvg.forEach((data) => {
      if (data?.value) {
        overallAvgAmount += 1;
      }
    });

    let currentButtonGroupValue = getButtonGroupDefaultValue();
    let currentPeriod = ButtonGroupValue.ONE_MONTH;

    if (overallAvgAmount === 2) {
      currentButtonGroupValue[2].isDisable = true;
    } else if (overallAvgAmount < 2) {
      currentButtonGroupValue[0].isDefault = true;
      currentButtonGroupValue[1].isDefault = false;

      currentButtonGroupValue[1].isDisable = true;
      currentButtonGroupValue[2].isDisable = true;

      currentPeriod = ButtonGroupValue.ONE_WEEK;
    }
    setPeriod(currentPeriod);
    setButtonGroupValue(currentButtonGroupValue);
  }, [data?.overallAvg, setButtonGroupValue, setPeriod]);

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
    updateButtonGroupValue,
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
