import { Container } from "@mui/system";
import styled from "styled-components";
import { GRAY_F2F2F2, WHITE_FFFFFF } from "../../constants/colors/colors";

export const StyledMainContainer = styled(Container)`
    padding-top: 2rem ;
    background-color:${GRAY_F2F2F2};
    border-radius: 12px 12px 0px 0px;
    &.MuiContainer-root{
        padding-right:0;
        padding-left:0;
    }
    
`

export const StyledChartContainer = styled(Container)`
    background-color:${WHITE_FFFFFF};
    padding:1rem;
    border-radius: 12px 12px 0px 0px;
`
