import styled from "styled-components";
import { BLACK_212121, GRAY_838383 } from "../../../../constants/colors/colors";

export const Container = styled.div``;

export const ContainerNtoFound = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyleList = styled.div`
  overflow: auto;
  max-height: 44.563rem;
  background-color: white;
  border-radius: 0.75rem;
  padding-top: 0rem;
  padding-bottom: 0rem;

  & .MuiTypography-body1 {
    color: ${BLACK_212121};
    font-weight: 600;
    line-height: 1.495rem;
  }

  & .MuiTypography-body2 {
    color: ${GRAY_838383};
    font-size: 0.875rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
