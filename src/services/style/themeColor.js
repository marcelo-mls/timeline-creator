import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0277BD',
      light: '#86D2FE',
      dark: '#014D79',
    },
    secondary: {
      main: '#A663CC',
      light: '#C193DC',
      dark: '#74329A',
    },
    error: {
      main: '#E53935',
      light: '#EC716F',
      dark: '#B51A17',
    },
    warning: {
      main: '#FDD835',
      light: '#FEE885',
      dark: '#F2C602',
    },
    success: {
      main: '#43A047',
      light: '#8CCF8F',
      dark: '#2A652D',
    },
  },
});

export default darkTheme;
