import { createTheme } from '@mui/material/styles';

// Define as cores para os temas light e dark
const lightTheme = {
    palette: {
        type: 'light',
        primary: {
          main: '#FFD700', // Amarelo
        },
        secondary: {
          main: '#FF4500', // Laranja
        },
    },
};

const darkTheme = {
    palette: {
        type: 'dark',
        primary: {
          main: '#FF4500', // Laranja
        },
        secondary: {
          main: '#FFD700', // Amarelo
        },
      },
};

// Exporta os temas light e dark
export const light = createTheme(lightTheme);
export const dark = createTheme(darkTheme);
