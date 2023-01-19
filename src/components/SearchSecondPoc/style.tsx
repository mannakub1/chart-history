import { Modal, TextField } from "@mui/material";
import { Container } from "@mui/system";
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

export const StyledSearchModal = styled(TextField)`
&& {
  border: '1px solid';
  border-color: '#f2f2f2;
    background-color: white;
    border-radius:8px;
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
`
export const StyleModal = styled(Modal)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  transform: open ? 'translateY(0)' : 'translateY(100%)';
  transition: transform 0.3s ease-in-out;
`