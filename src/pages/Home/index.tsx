import Chip from '../../components/Chip';
import Card from '../../components/Card';
import { Typography } from '@mui/material';

const Home = () => {
  return (
    <>
      <Chip label='2.25%' />
      <Card>
        <Typography>
          Sample Text header inside card component.
        </Typography>
      </Card>
    </>
  );
} 

export default Home