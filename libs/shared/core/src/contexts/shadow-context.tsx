import { ReactNode, createContext, useState } from 'react';

type Props = {
  defaultMode: false;
  children: ReactNode;
};

type ShadowContextType = {
  shadow: boolean;
  toggleShadow: () => void;
};

export const ShadowContext: React.Context<ShadowContextType> = createContext(
  {} as ShadowContextType
);

export const ShadowProvider: React.FC<Props> = ({ children, defaultMode }) => {
  const [shadow, setShadow] = useState<boolean>(defaultMode);

  const toggleShadow = () => {
    setShadow(!shadow);
  };

  return (
    <ShadowContext.Provider value={{shadow, toggleShadow}}>
      {children}
    </ShadowContext.Provider>
  );
};
