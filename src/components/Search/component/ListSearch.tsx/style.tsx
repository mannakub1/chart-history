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
  max-height: 713px;
  background-color: white;
  border-radius: 12px;
  padding-top: 0px;
  padding-bottom: 0px;

  & .MuiTypography-body1 {
    color: ${BLACK_212121};
    font-weight: 600;
    line-height: 23.92px;
  }

  & .MuiTypography-body2 {
    color: ${GRAY_838383};
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
