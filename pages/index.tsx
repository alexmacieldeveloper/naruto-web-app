import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { light, dark } from '../theme';

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const HomePage: React.FC<{ toggleTheme: () => void }> = ({ toggleTheme }) => {
  return (
    <StyledContainer>
      <Typography variant="h1" gutterBottom>
        Welcome to My Next.js App
      </Typography>
      <Button variant="contained" color="primary" onClick={toggleTheme}>
        Toggle Theme
      </Button>
    </StyledContainer>
  );
};

export default HomePage;
