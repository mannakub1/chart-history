import React, { useEffect } from 'react';
import Chip from '../../components/Chip';
import { homeProps } from './type';

function Home({}: homeProps) {
  useEffect(() => {
    document.title = "Chart History";
  }, []);

  return (
    <>
          <Chip label='2.25%'/>
    </>
  );
}

export default Home