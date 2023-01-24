import Search from '../../components/Search';
import { useState } from 'react'
import { Container } from '@mui/material';
import BondCard from '../../components/BondCard';
import ButtonGroup from '../../components/common/Buttongroup/index';
import { StyledChartContainer, StyledMainContainer } from './style'

const Home = () => {
  const [value, setValue] = useState('1 สัปดาห์')
  const [showComponents, setShowComponents] = useState(true)
  return (
    <>
      {/* //DUMMY CONTAINER// */}
      <StyledMainContainer maxWidth='xs'>
        <Container>
          <Search setShowComponents={setShowComponents} showComponents={showComponents} />
        </Container>

        {showComponents ? (<div style={{ marginTop: '2rem' }}>
          <Container>
            <BondCard title="PTTC237A" imageUrl="imageUrl" description="หุ้นกู้เพื่ออนุรักษ์สิ่งแวดล้อมของบริษัท ปตท. จำกัด (มหาชน) ครั้งที่ 1/2563 ครบกำหนดไถ่ถอนปี พ.ศ. 2566" interestRate="2.85% - 3.11%" rateType={"02"} />
          </Container>
          {/* //DUMMY CONTAINER// */}
          <StyledChartContainer >
            <ButtonGroup selected={value} setSelected={setValue} />
          </StyledChartContainer>
        </div>) : null}
      </StyledMainContainer>

    </>
  );
}

export default Home