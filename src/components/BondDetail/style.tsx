import styled from "styled-components";
import Text from "../common/Text";
import { GRAY_F8F8F8 } from "../../constants/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Content = styled.div`
  background-color: ${GRAY_F8F8F8};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 0.5rem;
  padding: 1rem;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleStyel = styled(Text)`
  padding-left: 1rem;
`;
