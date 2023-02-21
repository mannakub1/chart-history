import styled from "styled-components";
import { GRAY_F2F2F2 } from "../../constants/colors";

export const Container = styled.div`
  background-color: ${GRAY_F2F2F2};
  height: 100vh;
`;
export const ContainerNotFound = styled.div`
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
