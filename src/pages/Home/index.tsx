import React ,{ useEffect }from 'react';
import { ContainerWrapper, ComponentsWrapper, StyledContainer } from './style'
import PageTitle from './components/PageTitle/index'
import BondChip from '../../components/Chip';
import { HomeProps } from './type';

function Home({title,maxWidth}:HomeProps) {
  useEffect(() => {
    document.title = "Chart History";
  }, []);

  return (
    <>
      <PageTitle maxWidth={maxWidth} title={title}  />
      <ContainerWrapper>
        <ComponentsWrapper>
          <StyledContainer maxWidth={maxWidth} >
            <BondChip label='Test chip component' />
          </StyledContainer>
        </ComponentsWrapper>
      </ContainerWrapper>
    </>
  );
}

export default Home