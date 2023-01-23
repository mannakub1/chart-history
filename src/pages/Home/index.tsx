import { Container } from '@mui/system';
import Search from '../../components/Search';
import { useState } from 'react'
import BondCard from '../../components/BondCard';
const Home = () => {
  const [showComponents, setShowComponents] = useState(true)
  return (
    <>
      <Container maxWidth="xs" sx={{pt:'2rem'}} >
        <Search setShowComponents={setShowComponents} showComponents={showComponents} />
        {showComponents ? (<div style={{ marginTop: '2rem' }}>
          <BondCard name="PTTC237A" description='หุ้นกู้เพื่ออนุรักษ์สิ่งแวดล้อมของบริษัท ปตท. จำกัด (มหาชน) ครั้งที่ 1/2563 ครบกำหนดไถ่ถอนปี พ.ศ. 2566' percent='3%' footerTitle='อัตราดอกเบี้ยหน้าตั๋ว' />
        </div>) : null}
      </Container>
    </>
  );
}

export default Home