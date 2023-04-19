import { ThemeContext, useThemeMode } from '@procedural-render/core';
import { ModulesRenderProceduralRender } from '@procedural-render/modules/render/procedural-render';
import { GlobalStyle } from '@procedural-render/styles';

export function App() {
  const { themeToggler } = useThemeMode()

  return (
    <ThemeContext>
      <GlobalStyle />
      <ModulesRenderProceduralRender themeToggler={themeToggler} />
    </ThemeContext>
  );
}

export default App;
