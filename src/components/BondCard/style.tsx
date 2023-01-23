
import styled from "styled-components"
import Card from "../common/Card"
import { GRAY_F8F8F8, BLACK_212121, GRAY_838383 } from "../../constants/colors/colors"
import { Avatar, CardActions, Typography } from "@mui/material"

export const StyledAvatar = styled(Avatar)`
  width:32px!important;
  height:32px!important;
`

export const StyledAvartarContainer = styled.div`
  display: flex;
  align-items:center;
  padding-right:6px;
  padding-left:16px;
`

export const StyledBondContentContainer = styled.div`
  padding: 16px 16px 16px 0;
  max-height:73px;
`

export const StyledBondTitleText = styled(Typography)`
  color: ${BLACK_212121}
  font-size: 16px!important;
  &.css-m5f4gq-MuiTypography-root {
    font-weight: 600!important;
    line-height: 24px!inportant;
  }
`

export const StyledBondDescriptionText = styled(Typography)`
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

export const StyledCardActions = styled(CardActions)`
  background-color:${GRAY_F8F8F8};
  display:flex;
  justify-content: space-between;
  padding: 8px 16px 8px 16px!important;
  align-items: start!important;
`

export const StyledCardContentContainer = styled.div`
  display:flex;
`

export const StyledInterestRateTitle = styled(Typography)`
  font-weight: 600!important;
  font-size: 16px!important;
`

export const StyledInterestRateSubTitle = styled(Typography)`
  font-weight: 400!important;
  font-size: 14px!important;
  &.css-m5f4gq-MuiTypography-root{
    color: ${GRAY_838383};
    font-weight: 400;
  }
`

