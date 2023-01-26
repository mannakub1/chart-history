import styled from "styled-components";
import { ToggleButtonGroup, ToggleButton, } from "@mui/material";
import { BLUE_025BB7, GRAY_565656, GRAY_F2F2F2, WHITE_FFFFFF } from "../../../constants/colors/colors";

export const StyledButtonGroup = styled(ToggleButtonGroup)`
    background : ${GRAY_F2F2F2};
    margin: auto;
    &.MuiToggleButtonGroup-root{
        border-radius : 28px;
        display: flex;
        justify-content: center;
        padding:4px;
    }
`

export const StyledButton = styled(ToggleButton)`
    &.MuiButtonBase-root {
        padding-top:0.25rem;
        padding-bottom:0.25rem;
        padding-right: 1.823rem;
        padding-left: 1.823rem;
        border: none;
        width:100%;
         @media (max-width: 324px) {
             padding-right: 1rem;
             padding-left: 1rem;
             font-size:  10px;
         }
        &.MuiToggleButtonGroup-grouped{
            border-radius: 1.625rem;
            color: ${GRAY_565656};
            font-weight: 400;
            font-size:  14px;
        } 
         &.MuiToggleButtonGroup-grouped:not(:first-of-type) {
            border-radius: 1.625rem;
            margin-left:0.313rem;
        }
        &.MuiToggleButtonGroup-grouped:not(:last-of-type) {
            border-radius: 1.625rem;
            margin-right:0.313;
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