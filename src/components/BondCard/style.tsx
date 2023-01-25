import styled from "styled-components";
import { CardActions } from "@mui/material";

import Card from "../common/Card";
import Text from "../common/Text";
import { GRAY_F8F8F8 } from "../../constants/colors/colors";

export const StyledAvartarContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
  padding-left: 16px;
`;

export const StyledBondContentContainer = styled.div`
  padding: 16px 16px 16px 0;
  max-height: 73px;
`;

export const StyledBondDescriptionText = styled(Text)`
  display: -webkit-box;
  max-height: 73px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const StyledCard = styled(Card)`
  margin-bottom: 16px;
  margin-top: 16px;
  max-height: 168px;
`;

export const StyledCardContentContainer = styled.div`
  display: flex;
`;

export const StyledCardFooter = styled(CardActions)`
  &.MuiCardActions-root {
    align-items: start;
    background-color: ${GRAY_F8F8F8};
    display: flex;
    justify-content: space-between;
    padding: 8px 16px 8px 16px;
  }
`;
