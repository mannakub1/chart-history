import { useCallback, useState } from "react";

import Search from "../../components/Search";
import ButtonGroup from "../../components/common/ButtonGroup";
import BondCard from "../../components/BondCard";

import { ContainerHeader, ContainerBody } from "./style";
import Overall from "../../components/Overall";

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
            <ButtonGroup
              defaultValue={defaultValue}
              onSelected={onClickButtonGroup}
              values={buttonGroupValue}
            />
          </div>
          <Overall values={overallList} />
        </ContainerBody>
      )}
    </>
  );
};

export default Home;
