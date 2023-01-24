
import Search from '../../components/Search';
import { useState } from 'react'
import { Container } from '@mui/material';
import BondCard from '../../components/BondCard';

const Home = () => {
  const [showComponents, setShowComponents] = useState(true)
  return (
    <>
      <Container maxWidth="xs" sx={{pt:'2rem'}} >
        <Search setShowComponents={setShowComponents} showComponents={showComponents} />
        {showComponents ? (<div style={{ marginTop: '2rem' }}>
          <BondCard title="PTTC237A" imageUrl="imageUrl" description="หุ้นกู้เพื่ออนุรักษ์สิ่งแวดล้อมของบริษัท ปตท. จำกัด (มหาชน) ครั้งที่ 1/2563 ครบกำหนดไถ่ถอนปี พ.ศ. 2566" interestRate="2.85% - 3.11%" rateType={"02"} />
        </div>) : null}
      </Container>
    
  
    </>
  );
}

export default Home