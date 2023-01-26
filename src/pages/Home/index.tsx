import Search from "../../components/Search";
import { useState } from "react";
import ButtonGroup from "../../components/common/Buttongroup";
import BondCard from "../../components/BondCard";
import { Container } from "./style";

const Home = () => {
  const [buttonGroupValue] = useState([
    { label: '1 สัปดาห์', value: 'oneWeek' },
    { label: '1 เดือน', value: 'oneMonth' },
    { label: '3 เดือน', value: 'threeMonth' }
  ])
  const [timeSelected, setTimeSelected] = useState('oneMonth')
  const [showComponents, setShowComponents] = useState(true);
  return (
    <>
      <Container>
        <Search
          setShowComponents={setShowComponents}
          showComponents={showComponents}
        />
        {showComponents && (
          <>
            <BondCard
              title="PTTC237A"
              description="หุ้นกู้เพื่ออนุรักษ์สิ่งแวดล้อมของบริษัท ปตท. จำกัด (มหาชน) ครั้งที่ 1/2563 ครบกำหนดไถ่ถอนปี พ.ศ. 2566 หุ้นกู้เพื่ออนุรักษ์สิ่งแวดล้อมของบริษัท ปตท. จำกัด (มหาชน) ครั้งที่ 1/2563 ครบกำหนดไถ่ถอนปี พ.ศ. 2566"
              interestRate="3.11%"
              rateType={"03"}
            />
          </>

        )}
      </Container>
      {showComponents && (
        <div style={{ backgroundColor: 'white', padding: '1rem' }}>
          <ButtonGroup timeSelected={timeSelected} setTimeSelected={setTimeSelected} buttonGroupValue={buttonGroupValue} />
        </div>)}
    </>
  );
};

export default Home;
