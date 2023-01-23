
import styled from "styled-components"
import Card from "../common/Card"
import { GRAY_F8F8F8, GRAY_838383 } from "../../constants/colors/colors"
import { Avatar, CardActions } from "@mui/material"
import Text from "../common/Text"

export const StyledAvatar = styled(Avatar)`
  width:32px!important;
  height:32px!important;
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
  color: ${GRAY_838383};
  line-height: 21px!important;
  font-size: 14px!important;
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

export const StyledCardFooter = styled(CardActions)`
  &.css-1t6e9jv-MuiCardActions-root{
    padding: 8px 16px 8px 16px;
    align-items: start;
    background-color:${GRAY_F8F8F8};
    display:flex;
    justify-content: space-between;
  }
`

export const StyledCardContentContainer = styled.div`
  display:flex;
`


