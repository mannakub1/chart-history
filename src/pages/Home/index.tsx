import { useEffect } from 'react'
import { ContainerWrapper, ComponentsWrapper, StyledContainer } from './style'
import PageTitle from './components/PageTitle/index'


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
  
          </StyledContainer>
        </ComponentsWrapper>
      </ContainerWrapper>
    </>
  );
}

export default Home