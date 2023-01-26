import { TextField, Link } from "@mui/material";
import styled from "styled-components";
import { BLUE_025BB7, GRAY_E0E0E0 } from "../../constants/colors/colors";

export const FlexRow = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const StyleLink = styled(Link)`
  padding-left: 8px;

  & .MuiTypography-root {
    color: ${BLUE_025BB7};
  }
`;

export const StyleSearch = styled(TextField)`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 12px 24px -8px rgba(0, 0, 0, 0.1);
  & .MuiInputBase-root {
    border-radius: 8px;
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: ${GRAY_E0E0E0};
    }
  }

  & .MuiOutlinedInput-notchedOutline {
    border-color: ${GRAY_E0E0E0};
  }
`;

export const StyleSearchContainer = styled.div`
  margin-bottom: 16px;
`;
