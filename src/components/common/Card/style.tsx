import { Card } from "@mui/material"
import { WHITE_FFFFFF } from "../../../constants/colors/colors"
import styled from "styled-components"

export const StyledCard = styled(Card)`
  border-radius: 8px;
  background-color: ${WHITE_FFFFFF};
  &.MuiCard-root{
    box-shadow: 0px 12px 24px -8px rgba(0, 0, 0, 0.1);
  }
`