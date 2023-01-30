import styled from "styled-components";
import { GRAY_F2F2F2, WHITE_FFFFFF } from "../../constants/colors/colors";

export const Container = styled.div`
  background-color: ${GRAY_F2F2F2};
  height: 100vh;
`;

export const ContainerHeader = styled.div`
  padding: 16px;
  background-color: ${GRAY_F2F2F2};
`;

export const ContainerBody = styled.div`
  background-color: ${WHITE_FFFFFF};
  border-radius: 12px 12px 0px 0px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;

  margin-top: -15px;
`;
