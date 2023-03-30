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
  }


  h1, h2 {
    margin: 0;
  color: ${(props) => props.theme.colors.textPrimary};
  text-align: center;
  }

  button, input {
    min-height: 2.25rem;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 0.3125rem;

  color: ${(props) => props.theme.colors.textSecondary};

  font-size: 0.75rem;

  outline: none;
  border: none;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 0.75rem;

  padding-inline: 1rem;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }

`;
