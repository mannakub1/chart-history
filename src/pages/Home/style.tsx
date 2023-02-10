import styled from "styled-components";
import { GRAY_F2F2F2, WHITE_FFFFFF } from "../../constants/colors/colors";

export const Container = styled.div`
  background-color: ${GRAY_F2F2F2};
  height: 100vh;
`;

export const ContainerHeader = styled.div`
  padding: 1rem;
  background-color: ${GRAY_F2F2F2};
`;

export const ContainerBody = styled.div`
  background-color: ${WHITE_FFFFFF};
  border-radius: 0.75rem 0.75rem 0rem 0rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 1.5rem;

  margin-top: -0.938rem;
`;

export const ContainerHr = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
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
  border: 0.063rem solid ${GRAY_F2F2F2};
`;
