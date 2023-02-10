import styled from "styled-components";
import Text from "../common/Text";
import { GRAY_F8F8F8 } from "../../constants/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleStyel = styled(Text)`
  padding-left: 16px;
`;

export const Content = styled.div`
  background-color: ${GRAY_F8F8F8};
  display: flex;
  flex-direction: start;

  gap: 16px;
  justify-content: space-around;
  padding: 16px;
  text-align: center;
`;
