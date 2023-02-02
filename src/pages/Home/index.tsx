import { useCallback, useEffect, useState } from "react";

import Search from "../../components/Search";
import BondCard from "../../components/BondCard";
import { chartDataMockup } from "../../constants/mockup/data";

import { ContainerHeader, ContainerBody } from "./style";
import Overall from "../../components/Overall";
import BondDetail from "../../components/BondDetail";
import ChartHistory from "../../components/ChartHistory";

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
const Home = () => {
  const [showComponents, setShowComponents] = useState(true);
  const [chartData] = useState(chartDataMockup);

  const { data: searchBond } = useSearchBond();
  const { mutate: onSearch } = useSearchBondAction();
  const [valueSearch, setValueSearch] = useState(searchBond);

  useEffect(() => {
    setValueSearch(searchBond);
  }, [searchBond]);

  const onChangeShowComopnent = useCallback(
    (value: boolean) => {
      setShowComponents(value);
    },
    [setShowComponents]
  );

  const onClickButtonGroup = useCallback((selectedValue) => {
    //Fetch data with selected value
  }, []);

  const onSearchChange = useCallback(
    (value: string) => {
      onSearch(value, {
        onSuccess: (response) => {
          setValueSearch(response);
          console.log("get API Success", response);
        },
        onError: (response) => {
          console.log("error ", response);
        },
      });
    },
    [onSearch]
  );

  return (
    <Container>
      <ContainerHeader>
        <Search
          valueSearch={valueSearch || []}
          onSearch={onSearchChange}
          setShowComponents={onChangeShowComopnent}
          showComponents={showComponents}
        />
        {showComponents && (
          <BondCard
            title="PTTC237A"
            description="หุ้นกู้เพื่ออนุรักษ์สิ่งแวดล้อมของบริษัท ปตท. จำกัด (มหาชน) ครั้งที่ 1/2563 ครบกำหนดไถ่ถอนปี พ.ศ. 2566 หุ้นกู้เพื่ออนุรักษ์สิ่งแวดล้อมของบริษัท ปตท. จำกัด (มหาชน) ครั้งที่ 1/2563 ครบกำหนดไถ่ถอนปี พ.ศ. 2566"
            interestRate="3.11%"
            rateType={"03"}
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
