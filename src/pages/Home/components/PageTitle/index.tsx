import { StyledContainer,AppBarStyle,ArrowBackIosIconStyle,PageTitleTextStyle} from './style'
import { type } from './type'
import { Typography, AppBar, Toolbar } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const Index = () => {
    return (
        <AppBar style={AppBarStyle} elevation={0} position="sticky" >
            <StyledContainer maxWidth="md">
                <Toolbar>
                    <ArrowBackIosIcon style={ArrowBackIosIconStyle} />
                    <Typography variant="h6" style={PageTitleTextStyle}>
                        ข้อมูลตลาดรองย้อนหลัง
                    </Typography>
                </Toolbar>
            </StyledContainer>
        </AppBar >
    )
}

export default Index