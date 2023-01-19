import Chip from '../../components/common/Chip';
import Card from '../../components/common/Card';
import { Typography } from '@mui/material';
import BondCard from '../../components/BondCard';

const Home = () => {
  return (
    <div style={{padding: 16}}>
      <Chip label='2.25%' />
      <Card>
        <Typography>
          Sample Text header inside card component.
        </Typography>
      </Card>
      
      <BondCard name="Man" detail="test bond card" percent="2.25%" />

      </div>
  );
} 

export default Home