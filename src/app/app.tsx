import { ProceduralRender } from '@terrain-map/modules/render';
import { GlobalStyle } from '@terrain-map/shared/styles';
import {
  ShadowProvider,
  LightProvider,
  ThemeContext,
  useThemeMode,
  DetailLevelProvider,
  ModelProvider,
} from '@terrain-map/shared/core';

export const App = () => {
  const { themeToggler } = useThemeMode();

  return (
    <ShadowProvider defaultMode={false}>
      <LightProvider defaultMode={true}>
        <DetailLevelProvider defaultMode="baixo">
          <ModelProvider defaultMode="cube">
            <ThemeContext>
              <GlobalStyle />
              <ProceduralRender themeToggler={themeToggler} />
            </ThemeContext>
          </ModelProvider>
        </DetailLevelProvider>
      </LightProvider>
    </ShadowProvider>
  );
};
