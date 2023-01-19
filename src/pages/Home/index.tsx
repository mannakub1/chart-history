import { Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { Container } from '@mui/system';
import FirstSearch from '../../components/SearchFirstPoc';
import SecondSearch from '../../components/SearchSecondPoc';
import { useState } from 'react'

const Home = () => {
  const [display, setDisplay] = useState("firstPoc")
  const handleChange = (event: React.MouseEvent<HTMLElement>, display: string,) => {
    setDisplay(display)
  }
  return (
    //sx props styling only using for POC
    <>
      <Container maxWidth="xs" sx={{ py: 1, px: 2, my: 2, bgcolor: '#F2F2F2', borderRadius: '12px' }}>
        <Typography variant='body1' sx={{ textAlign: 'center', m: 2, color: 'gray' }}>
          for Second POC click search input to open modal
        </Typography>
        <ToggleButtonGroup
          sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}
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
      <Container maxWidth="xs" sx={{ py: 4, px: 2, mt: 2, bgcolor: '#F2F2F2', height: '100vh', borderRadius: '12px 12px 0px 0px' }}>
        {display == 'firstPoc' ? <FirstSearch /> : <SecondSearch />}
      </Container>
    </>
  );
}

export default Home