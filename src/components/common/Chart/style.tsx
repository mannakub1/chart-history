import { Typography } from "@mui/material";
import styled from "styled-components";
import ReactEcharts from "echarts-for-react";
import { GRAY_565656 } from "../../../constants/colors/colors";

export const StyledTextDiv = styled.div`
  padding: 1rem 0 1rem 0;
`;

export const StyledChartDiv = styled.div`
  padding-bottom: 1rem;
`;
export const StyledEchart = styled(ReactEcharts)`
  height: 17rem !important;
`;
export const StyledNoDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.125rem 0 3.125rem 0;
`;
export const StyledNoDataImage = styled.img`
  padding: 0 3.84375rem 0 3.84375rem;
`;
export const StyledTypography = styled(Typography)`
  padding-top: 1rem;
  text-align: center;
  font-weight: 400;
  color: ${GRAY_565656};
`;
