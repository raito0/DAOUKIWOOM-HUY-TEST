import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const DARK_BLUE = '#181949';
export const LIGHT_BLUE = '#CFE5FF';
export const LIGHT_PINK = '#FFD1E8';
export const LIGHT_GRAY = '#F4F4F4';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: DARK_BLUE,
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: DARK_BLUE,
    },
  },
});

export default theme;
