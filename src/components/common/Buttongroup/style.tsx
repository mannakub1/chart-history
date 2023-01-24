import styled from "styled-components";
import { ToggleButtonGroup, ToggleButton, } from "@mui/material";
import { BLUE_025BB7, GRAY_565656, GRAY_F2F2F2 ,WHITE_FFFFFF} from "../../../constants/colors/colors";

export const StyledButtonGroup = styled(ToggleButtonGroup)`
    background : ${GRAY_F2F2F2};
    margin: auto;
    &.MuiToggleButtonGroup-root{
        border-radius : 28px;
        width : 343px;
        height : 29px;
        display: flex;
        justify-content: center;
        padding:4px;
    }
`

export const StyledButton = styled(ToggleButton)`
    width: 106.33px;
    &.MuiButtonBase-root {
        border: none;
        &.MuiToggleButtonGroup-grouped{
            border-radius: 26px;
            color: ${GRAY_565656};
            font-weight: 400;
            font-size: 14px;
        } 
         &.MuiToggleButtonGroup-grouped:not(:first-of-type) {
            border-radius: 26px;
            margin-left:5px;
        }
        &.MuiToggleButtonGroup-grouped:not(:last-of-type) {
            border-radius: 26px;
            margin-right:5px;
        }
        &.Mui-selected {
            background-color: white;
            color: ${BLUE_025BB7};    
            box-shadow : 0px 2px 6px rgba(0, 0, 0, 0.25);
        }
        &.Mui-selected:hover {
            background-color: ${WHITE_FFFFFF};
            border-radius : 26px;
        }
    }
    &.MuiButtonBase-root:hover {
        background-color: transparent;
    }
`