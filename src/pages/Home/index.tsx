import React from 'react';
import { useEffect } from 'react'
import { ContainerWrapper, ComponentsWrapper, StyledContainer } from './style'
import PageTitle from './components/PageTitle/index'
import BondChip from '../../components/Chip';


function Home() {
  useEffect(() => {
    document.title = "Chart History";
  }, []);

  return (
    <>
      <PageTitle />
      <ContainerWrapper>
        <ComponentsWrapper>
          <StyledContainer maxWidth="md">
            <BondChip label='Test chip component' />
          </StyledContainer>
        </ComponentsWrapper>
      </ContainerWrapper>
    </>
  );
}

export default Home