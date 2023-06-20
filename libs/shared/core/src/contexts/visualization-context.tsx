import { ReactNode, createContext, useState } from 'react';

export type OptionsVisualization = 'geo' | 'height' | 'wireframe';

type Props = {
  defaultMode: OptionsVisualization;
  children: ReactNode;
};

type VisualizationContextType = {
  mode: OptionsVisualization;
  toggleModeVisualization: (mode: OptionsVisualization) => void;
};

export const VisualizationContext: React.Context<VisualizationContextType> =
  createContext({} as VisualizationContextType);

export const VisualizationProvider: React.FC<Props> = ({
  children,
  defaultMode,
}) => {
  const [mode, setMode] = useState<OptionsVisualization>(defaultMode);

  const toggleModeVisualization = (mode: OptionsVisualization) => {
    setMode(mode);
  };

  return (
    <VisualizationContext.Provider
      value={{ mode, toggleModeVisualization }}
    >
      {children}
    </VisualizationContext.Provider>
  );
};
