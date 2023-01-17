import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        neutral: Palette['primary'];
    }
    interface PaletteOptions {
        neutral?: PaletteOptions['primary'];
    }
}
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        neutral: true;
    }
}

const Theme = createTheme({
    palette: {
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        }
    },
    typography: {
        fontFamily: 'Kanit',
    },
})

export const primaryGradient = {
    backgroundImage: 'linear-gradient(273.79deg, #025BB7 0%, #1894DF 100%)',
}

export default Theme