import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    min-height: 100vh;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
  }

  h1, h2 {
    margin: 0;
    color: ${(props) => props.theme.colors.textPrimary};
    text-align: center;
    font-family: 'Poppins';
    font-weight: 700;
    line-height: 1.5rem;
  }
`;
