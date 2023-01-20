import { Typography, ToggleButtonGroup, ToggleButton, } from '@mui/material';
import { Container } from '@mui/system';
import { useCallback } from 'react';
import FirstSearch from '../../components/SearchFirstPoc';
import SecondSearch from '../../components/SearchSecondPoc';
import { useState } from 'react'
import Card from '../../components/common/Card';
import BondCard from '../../components/BondCard';
const Home = () => {
  const [display, setDisplay] = useState("firstPoc")
  const [showComponents, setshowComponents] = useState(true)
  const handleChange = useCallback(
    (event: React.MouseEvent<HTMLElement>, display: string,) => {
      setDisplay(display)
    },
    [],
  )

  return (
    //sx props styling only using for POC
    <>
      <Container maxWidth="xs" sx={{ py: 1, px: 2, my: 2, bgcolor: '#F2F2F2', borderRadius: '8px' }}>
        <Typography variant='body1' sx={{ textAlign: 'center', m: 2, color: 'gray' }}>
          For second POC click search input to open modal
        </Typography>
        <ToggleButtonGroup
          sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}
          fullWidth
          color="primary"
          value={display}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="firstPoc">First POC</ToggleButton>
          <ToggleButton value="SecondPoc">Second POC</ToggleButton>
        </ToggleButtonGroup>
      </Container>
      <Container maxWidth="xs" sx={{ py: 4, px: 2, mt: 2, bgcolor: '#F2F2F2', borderRadius: '8px 8px 0px 0px',height:'760px' }}>
        {display === 'firstPoc' ? <FirstSearch setshowComponents={setshowComponents} showComponents={showComponents} /> : <SecondSearch setshowComponents={setshowComponents} showComponents={showComponents} />}
        {showComponents ? (<div style={{ marginTop: '2rem' }}>
          <BondCard name="PTTC237A" description='หุ้นกู้เพื่ออนุรักษ์สิ่งแวดล้อมของบริษัท ปตท. จำกัด (มหาชน) ครั้งที่ 1/2563 ครบกำหนดไถ่ถอนปี พ.ศ. 2566' percent='3%' footerTitle='อัตราดอกเบี้ยหน้าตั๋ว'  />
        </div>) : null}

      </Container>

    </>
  );
}

export default Home