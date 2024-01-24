import { AppProps } from 'next/app';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import {   ThemeProvider as MuiThemeProvider,
    createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { light, dark } from '../theme';
import { useState } from 'react'

// Define o tipo do tema
type ThemeType = 'light' | 'dark';

// Cria um tema Material-UI personalizado
const getMuiTheme = (theme: ThemeType) => {
  return createTheme({
    palette: theme === 'light' ? light.palette : dark.palette,
  });
};

// Componente de aplicativo que envolve o aplicativo com o tema e estilos globais
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  // Certifica-se de que o código seja executado apenas no lado do cliente
  if (typeof window !== 'undefined') {
    // Recupera o tema salvo no localStorage ou define como 'light' por padrão
    const savedTheme: ThemeType = localStorage.getItem('theme') as ThemeType || 'light';
    const [theme, setTheme] = useState<ThemeType>(savedTheme);

    // Alterna entre os temas light e dark
    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    };

    return (
      <StyledThemeProvider theme={{ mode: theme }}>
        <MuiThemeProvider theme={getMuiTheme(theme)}>
          <CssBaseline />
          <Component {...pageProps} toggleTheme={toggleTheme} />
        </MuiThemeProvider>
      </StyledThemeProvider>
    );
  }

  // Se o código estiver sendo executado no servidor, apenas renderiza o componente sem temas
  return <Component {...pageProps} />;
};

export default MyApp;
