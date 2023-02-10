import styled from "styled-components";
import { CardActions } from "@mui/material";

import Card from "../common/Card";
import Text from "../common/Text";
import { GRAY_F8F8F8 } from "../../constants/colors/colors";

export const StyledAvartarContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 0.5rem;
  padding-left: 1rem;
`;

export const StyledBondContentContainer = styled.div`
  padding: 1rem 1rem 1rem 0;
  max-height: 4.563rem;
`;

export const StyledBondDescriptionText = styled(Text)`
  display: -webkit-box;
  max-height: 4.563rem;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const StyledCard = styled(Card)`
  margin-bottom: 1rem;
  margin-top: 1rem;
  max-height: 10.5rem;
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
    padding: 0.5rem 1rem 0.5rem 1rem;
  }
`;
