import { ReactNode, createContext, useState } from 'react';

type Props = {
  defaultMode: false | true;
  children: ReactNode;
};

type LightContextType = {
  light: boolean;
  toggleLight: () => void;
};

export const LightContext: React.Context<LightContextType> = createContext(
  {} as LightContextType
);

export const LightProvider: React.FC<Props> = ({ children, defaultMode }) => {
  const [light, setLight] = useState<boolean>(defaultMode);

  const toggleLight = () => {
    setLight(!light);
  };

  return (
    <LightContext.Provider value={{light, toggleLight}}>
      {children}
    </LightContext.Provider>
  );
};
