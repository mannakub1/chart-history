import { Typography } from '@mui/material';
import { Container,  } from '@mui/system';
import Search from '../../components/Search';

const Home = () => {
  return (
    //sx props styling only using for POC
    <Container maxWidth="xs" sx={{ py: 1, px: 2, mt:2,bgcolor: '#F2F2F2', height: '100vh', borderRadius: '12px 12px 0px 0px' }}>
      <Typography variant='body1' sx={{ textAlign: 'center', m: 2 }}>
        Search POC (Input focused when render)
      </Typography>
      <Search />
    </Container>
  );
}

export default Home