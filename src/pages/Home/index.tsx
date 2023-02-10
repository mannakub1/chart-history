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

  const scrollProp = useMemo(() => {
    return {
      hasNextPage,
      isLoading: isFetchingNextPage,
      isFetched,
      onScroll: fetchNextPage,
    };
  }, [hasNextPage, isFetched, fetchNextPage, isFetchingNextPage]);

  const showComponentsWithData = useMemo(() => {
    if (showComponents && isDataAvailable) {
      return true;
    }
  }, [showComponents, isDataAvailable]);

  const onChangeShowComopnent = useCallback(
    (value: boolean) => {
      setShowComponents(value);
    },
    [setShowComponents]
  );

  const onSelectedChartHistory = useCallback(
    (period: string) => {
      getBond(
        {
          period,
          thaiSymbol,
        },
        {
          onSuccess: (data) => {
            setData(data);
          },
          onError: (response) => {
            setIsDataAvailable(false);
            console.log("response error", response);
          },
        }
      );
    },
    [getBond, thaiSymbol]
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
