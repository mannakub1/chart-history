import { useCallback, useEffect, useState } from "react";

import Search from "../../components/Search";
import BondCard from "../../components/BondCard";
import mockupData from "../../constants/chartMockupData/chartMockupData";

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
  const [chartData, setChartData] = useState(mockupData);

  useEffect(() => {
    setChartData(chartData.slice(0, 29 + 1));
  }, []);

  const onSearchChange = useCallback(
    (value: boolean) => {
      setShowComponents(value);
    },
    [setShowComponents]
  );
  const generateDataByTime = useCallback(
    (time) => {
      const amountMap = { oneWeek: 6, oneMonth: 29, threeMonth: 89 };
      const amount = amountMap[time] || 0;
      const arr = chartData.slice(0, amount + 1);
      setChartData(arr);
    },
    [chartData, setChartData]
  );
  const onClickButtonGroup = useCallback((selectedValue) => {
    generateDataByTime(selectedValue);
    //Fetch data with selected value
  }, []);

  return (
    <>
      <ContainerHeader>
        <Search
          setShowComponents={onSearchChange}
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
    </>
  );
};

export default Home;
