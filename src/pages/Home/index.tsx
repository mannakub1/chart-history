import { useEffect } from 'react'
import { ContainerWrapper, ComponentsWrapper, StyledContainer } from './style'
import PageTitle from './components/Page_title/index'
import SearchBond from './components/Search_Bond/index'
import BondCard from './components/Bond_card/index'
import Chart from './components/Chart/index'
import OverallAverage from './components/Overall_average/index'
import BondDetail from './components/Bond_detail/index'


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
          <SearchBond />
          <BondCard />
          <Chart />
          <OverallAverage />
          <BondDetail />
        </StyledContainer>
      </ComponentsWrapper>
    </ContainerWrapper>
    </>
  );
}

export default Home