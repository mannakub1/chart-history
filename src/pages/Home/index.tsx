import { useCallback, useEffect, useMemo, useState } from "react";

import Search from "../../components/Search";
import BondCard from "../../components/BondCard";

import {
  Container,
  ContainerHeader,
  ContainerBody,
  ContainerHr,
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

const detail = {
  info1: "7 ปี 1 เดือน",
  info2: "5 ปี 1 เดือน",
  info3: "4",
  info4: "24 ม.ค. 2566",
  info5: "1,000 บาท",
  // info6: "ทุก 6 เดือน หรือ ปีละ 2 ครั้ง",
};

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
  const [data, setData] = useState<GetBondResponse>();
  const [q, setQ] = useState("");
  const [thaiSymbol, setThaiSymbol] = useState("BATCHPAY0003");
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
        {showComponents && (
          <BondCard
            title={data?.thaiSymbol || ""}
            description={data?.nameTh || ""}
            interestRate={data?.couponRate || ""}
            rateType={data?.couponPayment || ""}
            imageUrl={data?.issuerImageUrl}
          />
        )}
      </ContainerHeader>
      {showComponents && (
        <ContainerBody>
          <ChartHistory
            data={data?.yieldPrices}
            onSelected={onSelectedChartHistory}
          />
          <ContainerHr>
            <Hr />
          </ContainerHr>
          <Overall values={data?.overallAvg || []} />
          <BondDetail detail={detail} />
        </ContainerBody>
      )}
    </Container>
  );
};

export default Home;
