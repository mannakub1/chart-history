import { StyledContainer,AppBarStyle,ArrowBackIconStyle,PageTitleTextStyle} from './style'
import { type } from './type'
import { Typography, AppBar, Toolbar } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Index = () => {
    return (
        <AppBar style={AppBarStyle} elevation={0} position="sticky" >
            <StyledContainer maxWidth="md">
                <Toolbar>
                    <ArrowBackIcon style={ArrowBackIconStyle} />
                    <Typography variant="h6" style={PageTitleTextStyle}>
                        ข้อมูลตลาดรองย้อนหลัง
                    </Typography>
                </Toolbar>
            </StyledContainer>
        </AppBar >
    )
}

export default Index