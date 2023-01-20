import { Container } from '@mui/material';
import BondCard from '../../components/BondCard';

const Home = () => {
  return (
    <Container maxWidth='xs' style={{ padding: 16 }}>
      <BondCard name="PTTC237A" BondImageUrl="ImageUrl" description="หุ้นกู้เพื่ออนุรักษ์สิ่งแวดล้อมของบริษัท ปตท. จำกัด (มหาชน) ครั้งที่ 1/2563 ครบกำหนดไถ่ถอนปี พ.ศ. 2566" interestRate="2.25%" />
    </Container>
  );
}

export default Home