import { useCallback, useState } from "react";

import Search from "../../components/Search";
import ButtonGroup from "../../components/common/ButtonGroup";
import BondCard from "../../components/BondCard";
import mockupData from "../../constants/chartMockupData/chartMockupData";

import { ContainerHeader, ContainerBody } from "./style";
import Chart from "../../components/common/Chart";
import Overall from "../../components/Overall";
import BondDetail from "../../components/BondDetail";

const buttonGroupValue = [
  { label: "1 สัปดาห์", value: "oneWeek" },
  { label: "1 เดือน", value: "oneMonth" },
  { label: "3 เดือน", value: "threeMonth" },
];

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
  const [defaultValue, setDefaultValue] = useState("oneMonth");

  const onSearchChange = useCallback(
    (value: boolean) => {
      setShowComponents(value);
    },
    [setShowComponents]
  );

  const onClickButtonGroup = useCallback(
    (selectedValue: string) => {
      setDefaultValue(selectedValue);
    },
    [setDefaultValue]
  );

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
          <div>
			<Chart data={mockupData} title="อัตราผลตอบแทน" />
            <ButtonGroup
              defaultValue={defaultValue}
              onSelected={onClickButtonGroup}
              values={buttonGroupValue}
            />
          </div>
          <Overall values={overallList} />
          <BondDetail detail={detail} />
        </ContainerBody>
      )}
    </>
  );
};

export default Home;
