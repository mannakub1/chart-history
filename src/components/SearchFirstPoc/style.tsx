import { TextField } from "@mui/material";
import styled from "styled-components";

export const StyledSearch = styled(TextField)`
&& {
    background-color: white;
    
    border-radius:8px!important;
    box-shadow: 0px 12px 24px -8px rgba(0, 0, 0, 0.1);
    & .MuiOutlinedInput-root {
      & fieldset {
        border-color: white;
      }
      &:hover fieldset {
        border-color: white;
      }
      &.Mui-focused fieldset {
        border-color: white;
      }
    }
  }
`

export const StyledDiv = styled.div`
  margin-top:1rem;
  height:550px;
`
