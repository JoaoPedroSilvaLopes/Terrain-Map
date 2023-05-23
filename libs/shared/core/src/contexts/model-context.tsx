import { ReactNode, createContext, useState } from 'react';

export type OptionsModel = 'cube' | 'hexagon'

type Props = {
  defaultMode: OptionsModel;
  children: ReactNode;
};

type ModellContextType = {
  model: OptionsModel;
  toggleModel: (model: OptionsModel) => void;
};

export const ModelContext: React.Context<ModellContextType> = createContext(
  {} as ModellContextType
);

export const ModelProvider: React.FC<Props> = ({ children, defaultMode }) => {
  const [model, setModel] = useState<OptionsModel>(defaultMode);

  const toggleModel = (model: OptionsModel) => {
    setModel(model);
  };

  return (
    <ModelContext.Provider value={{model, toggleModel}}>
      {children}
    </ModelContext.Provider>
  );
};
