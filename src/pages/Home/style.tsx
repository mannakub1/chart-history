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
  padding-bottom: 24px;

  margin-top: -15px;
`;

export const ContainerHr = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  color: ${GRAY_F2F2F2};
`;

export const ContainerNotFound = styled.div`
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Hr = styled.hr`
  border: 1px solid ${GRAY_F2F2F2};
`;
