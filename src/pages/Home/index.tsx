import Search from "../../components/Search";
import { useState } from "react";

import ButtonGroup from "../../components/common/Buttongroup";
import BondCard from "../../components/BondCard";
import { Container } from "./style";

const Home = () => {
  const [value, setValue] = useState('1 สัปดาห์')
  const [showComponents, setShowComponents] = useState(true);
  return (
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
          <div style={{ backgroundColor: 'white', padding: '1rem' }}>
            <ButtonGroup selected={value} setSelected={setValue} />
          </div>
        </>

      )}
    </Container>
  );
};

export default Home;
