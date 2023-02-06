import { useCallback, useEffect, useMemo, useState } from "react";

import Search from "../../components/Search";
import BondCard from "../../components/BondCard";
import { chartDataMockup } from "../../constants/mockup/data";

import { Container, ContainerHeader, ContainerBody } from "./style";
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

const overallList = [
  { description: "1 สัปดาห์", value: -4.0 },
  { description: "1 เดือน", value: 4.0 },
  { description: "3 เดือน", value: 8.0 },
];

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
  const [showComponents, setShowComponents] = useState(true);
  const [chartData] = useState(chartDataMockup);
  const [q, setQ] = useState("");
  const [thaiSymbol, setThaiSymbol] = useState("BATCHPAY0003");
  const [period, setPeriod] = useState("past_1_month");
  const [data, setData] = useState<GetBondResponse>();

  const {
    data: searchBond,
    fetchNextPage,
    isFetched,
    isFetchingNextPage,
    hasNextPage,
  } = useSearchBond(q);

  const { mutate: getBond } = useGetBond();
  const [valueSearch, setValueSearch] = useState<
    ItemSearchListType[] | undefined
  >([]);

  useEffect(() => {
    const newData = mapSearchDataApiToComponent(searchBond?.pages || []);
    setValueSearch(newData);
  }, [searchBond]);

  useEffect(() => {
    getBond(
      {
        period,
        thaiSymbol,
      },
      {
        onSuccess: (data) => {
          console.log("response", data);
          setData(data);
        },
        onError: (response) => {
          console.log("response error", response);
        },
      }
    );
  }, [getBond, period, thaiSymbol]);

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

  const onClickButtonGroup = useCallback(() => {}, []);

  const onValueChange = useCallback(
    (selectedValue: string) => {
      console.log("onClickItemSearch", selectedValue);
      setThaiSymbol(selectedValue);
    },
    [setThaiSymbol]
  );

  const onSearchChange = useCallback((value: string) => {
    setQ(value);
  }, []);

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
          />
        )}
      </ContainerHeader>
      {showComponents && (
        <ContainerBody>
          <ChartHistory data={chartData} onSelected={onClickButtonGroup} />
          <Overall values={overallList} />
          <BondDetail detail={detail} />
        </ContainerBody>
      )}
    </Container>
  );
};

export default Home;
