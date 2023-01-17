import { color } from '../../constants/theme/theme'
import { Chip } from '@mui/material'
import styled from 'styled-components'


export const StyledChip = styled(Chip)`
  color: white !important;
  background-image: ${color.primary.gradient};
  font-family: 'Kanit';
  font-style: normal;
  font-weight: 600;
  font-size: 18px!important;
  line-height: 27px;
  & .MuiChip-label {
    padding-left: 16px;
    padding-right: 16px;
  }
`