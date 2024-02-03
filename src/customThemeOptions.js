import { createTheme } from '@mui/material/styles';

const theThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#a4910d',
    },
    secondary: {
      main: '#985a11',
    },
    info: {
      main: '#a2272a',
    },
    success: {
      main: '#08640d',
    },
    text: {
      primary: '#968e61',
    },
  },
};

export const customThemeOptions = createTheme(theThemeOptions);