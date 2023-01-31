import styled from "styled-components";
import { Tabs, Tab } from "@mui/material";

import {
  BLUE_025BB7,
  GRAY_565656,
  GRAY_F2F2F2,
  WHITE_FFFFFF,
} from "../../../constants/colors/colors";

export const StyledTabs = styled(Tabs)`
  &.MuiTabs-root {
    border: none;
    background: ${GRAY_F2F2F2};
    border-radius: 28px;
    width: 100%;
    min-height: unset;
    height: 42px;
  }
  .MuiTabs-scroller {
    padding-right: 6px;
    padding-left: 6px;
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
    bottom: 4px;
    border-radius: 28px;
    background-color: ${WHITE_FFFFFF};
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  }
`;
export const StyledTab = styled(Tab)`
  z-index: 100;
  position: relative;
  bottom: 2px;
  color: ${GRAY_565656};
  .MuiButtonBase-root-MuiTab-root {
    padding: 0;
  }
`;
