import styled from "styled-components";
import { WHITE_FFFFFF } from "../../constants/colors/colors";

export const ContainerHeader = styled.div`
  padding: 16px;
`;

export const ContainerBody = styled.div`
  background-color: ${WHITE_FFFFFF};
  border-radius: 12px 12px 0px 0px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100vh;
`;
