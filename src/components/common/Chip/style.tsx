import { GRADIENT_PRIMARY } from "../../../constants/colors";
import { Chip } from "@mui/material";
import styled from "styled-components";

export const StyledChip = styled(Chip)`
  background-image: ${GRADIENT_PRIMARY};
  font-style: normal;
  font-weight: 600;

  & .MuiChip-label {
    color: white;
    font-size: 1.125rem;
    line-height: 1.688rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
