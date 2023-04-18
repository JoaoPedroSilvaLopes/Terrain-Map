import { ModulesRenderProceduralRender } from '@procedural-render/modules/render/procedural-render';
import { GlobalStyle, dark, light } from '@procedural-render/styles';
import { useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

export function App() {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ModulesRenderProceduralRender toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
