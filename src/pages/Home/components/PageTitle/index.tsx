import { StyledContainer, AppBarStyle, ArrowBackIosIconStyle } from './style'
import { PageTitleProps } from './type'
import React from 'react';
import { Typography, AppBar, Toolbar } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const PageTitle = (props: PageTitleProps) => {
    return (
        <AppBar style={AppBarStyle} elevation={0} position="sticky" >
            <StyledContainer maxWidth="md">
                <Toolbar>
                    <ArrowBackIosIcon style={ArrowBackIosIconStyle} />
                    <Typography variant="h6">
                        ข้อมูลตลาดรองย้อนหลัง
                    </Typography>
                </Toolbar>
            </StyledContainer>
        </AppBar >
    )
}

export default PageTitle