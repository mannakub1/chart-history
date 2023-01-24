import { TextField, List, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import styled from "styled-components";

export const StyledSearch = styled(TextField)`
      background-color: white;
      border-radius:8px;
      box-shadow: 0px 12px 24px -8px rgba(0, 0, 0, 0.1);
      & .MuiOutlinedInput-root {
        
        & fieldset {
          border: 1px solid #E0E0E0;
        }
        &:hover fieldset {
          border: 1px solid #E0E0E0;
        }
        &.Mui-focused fieldset {
          border: 1px solid #E0E0E0;
        }
      }
     
`

export const StyledDiv = styled.div`
  margin-top : 1rem;
  height : 550px;
`
export const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
  color: gray;
`

export const StyledList = styled(List)`
 &.MuiList-root{
  overflow : auto;
  max-height :713px;
  background-color : white;
  border-radius : 8px;
 }
`
export const StyledButtonIcon = styled(IconButton)`
  z-index : 100;
`
export const StyledSearchContainer = styled.div`
  margin-bottom : 2rem;
  display : flex;
  align-items : center;
`