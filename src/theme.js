import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#7b1fa2' }, // Rich Violet
    secondary: { main: '#00e5ff' }, // Electric Cyan for CTA
    background: {
      default: '#050505', // Deep Black
      paper: '#121212',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: { fontWeight: 900, letterSpacing: '-2px' },
  },
});

export default theme;