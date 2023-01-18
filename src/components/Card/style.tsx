import { Card } from "@mui/material"
import styled,{css} from "styled-components"

export const StyledCard = styled(Card)`
${({ withPadding }) => withPadding && css`
padding: 20px;
`}
${({ stretchToBottom }) => stretchToBottom && css`
height: 100%;
`}
`