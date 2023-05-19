import { ProceduralRender } from '@terrain-map/modules/render';
import { GlobalStyle } from '@terrain-map/shared/styles';
import {
  ShadowProvider,
  LightProvider,
  ThemeContext,
  useThemeMode,
} from '@terrain-map/shared/core';

export const App = () => {
  const { themeToggler } = useThemeMode();

  return (
    <ShadowProvider defaultMode={false}>
      <LightProvider defaultMode={true}>
        <ThemeContext>
          <GlobalStyle />
          <ProceduralRender themeToggler={themeToggler} />
        </ThemeContext>
      </LightProvider>
    </ShadowProvider>
  );
};
