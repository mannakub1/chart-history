import { Card } from "@mui/material"
import styled from "styled-components"
import { CardProps } from "./type"

export const StyledCard = styled(Card) <CardProps>`
${props => props.withPadding && `padding: 16px;`}
${props => props.withMargin && `margin: 1rem;`}
${props => props.rounded && ` border-radius: ${props.rounded}!important;`}
box-shadow: 0px 12px 24px -8px rgba(0, 0, 0, 0.1);
&.css-bhp9pd-MuiPaper-root-MuiCard-root {
    background-color: ${props => props.backgroundColor};
  }
`