import { Container } from '@mui/material';
import BondCard from '../../components/BondCard';

const Home = () => {
  return (
    <Container maxWidth='xs' style={{ padding: 16, minWidth: '375px' }}>
      <BondCard name="PTTC237A" imageUrl="imageUrl" description="หุ้นกู้เพื่ออนุรักษ์สิ่งแวดล้อมของบริษัท ปตท. จำกัด (มหาชน) ครั้งที่ 1/2563 ครบกำหนดไถ่ถอนปี พ.ศ. 2566" interestRate="2.85% - 3.11%" rateType={"02"} />
    </Container>
  );
}

export default Home