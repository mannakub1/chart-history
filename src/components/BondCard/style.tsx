
import styled from "styled-components"
import Card from "../common/Card"
import { GRAY_F8F8F8 } from "../../constants/colors/colors"
import { Avatar, CardActions } from "@mui/material"
import Text from "../common/Text"

export const StyledAvatar = styled(Avatar)`
  .&MuiAvatar-root {
    width:32px;
    height:32px;
}
`

export const StyledAvartarContainer = styled.div`
  display: flex;
  align-items:center;
  padding-right:8px;
  padding-left:16px;
`

export const StyledBondContentContainer = styled.div`
  padding: 16px 16px 16px 0;
  max-height:73px;
`

export const StyledBondDescriptionText = styled(Text)`
  text-overflow: ellipsis;
  overflow:hidden;
  max-height:73px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const StyledCard = styled(Card)`
  margin-top: 16px;
  margin-bottom: 16px;
  max-height:168px
`

export const StyledCardContentContainer = styled.div`
  display:flex;
`

export const StyledCardFooter = styled(CardActions)`
  &.MuiCardActions-root{
    padding: 8px 16px 8px 16px;
    align-items: start;
    background-color:${GRAY_F8F8F8};
    display:flex;
    justify-content: space-between;
  }
`



