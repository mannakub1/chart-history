import { GRADIENT_PRIMARY } from "../../../constants/colors/colors";
import { Chip } from "@mui/material";
import styled from "styled-components";

export const StyledChip = styled(Chip)`
  background-image: ${GRADIENT_PRIMARY};
  font-style: normal;
  font-weight: 600;

  & .MuiChip-label {
    color: white;
    font-size: 18px;
    line-height: 27px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
