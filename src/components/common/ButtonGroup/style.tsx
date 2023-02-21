import styled from "styled-components";
import { Tabs, Tab } from "@mui/material";

import {
  BLUE_025BB7,
  GRAY_565656,
  GRAY_F2F2F2,
  WHITE_FFFFFF,
} from "../../../constants/colors";

export const StyledTabs = styled(Tabs)`
  &.MuiTabs-root {
    border: none;
    background: ${GRAY_F2F2F2};
    border-radius: 1.75rem;
    width: 100%;
    min-height: unset;
    height: 2.625rem;
  }
  .MuiTabs-scroller {
    padding-right: 0.375rem;
    padding-left: 0.375rem;
  }
  .MuiTabs-flexContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .MuiTab-root {
    max-width: unset;
    width: 100%;
    font-weight: 400;
  }
  .MuiTab-root.Mui-selected {
    color: ${BLUE_025BB7};
  }
  .MuiTabs-indicator {
    height: 80%;
    bottom: 0.25rem;
    border-radius: 1.75rem;
    background-color: ${WHITE_FFFFFF};
    box-shadow: 0rem 0.125rem 0.375rem rgba(0, 0, 0, 0.25);
  }
`;
export const StyledTab = styled(Tab)`
  z-index: 100;
  position: relative;
  bottom: 0.125rem;
  color: ${GRAY_565656};
  .MuiButtonBase-root-MuiTab-root {
    padding: 0;
  }
`;
