import { ReactNode, createContext, useState } from 'react';

export type Options = 'baixo' | 'medio' | 'alto';

type Props = {
  defaultMode: Options;
  children: ReactNode;
};

type DetailLevelContextType = {
  detailLevel: Options;
  area: number;
  toggleDetailLevel: (mode: Options) => void;
};

export const DetailLevelContext: React.Context<DetailLevelContextType> =
  createContext({} as DetailLevelContextType);

const toggleArea = (mode: Options): number => {
  switch (mode) {
    case 'alto':
      return 64;
      break;
    case 'baixo':
      return 16;
      break;
    case 'medio':
      return 32;
      break;
  }
};

export const DetailLevelProvider: React.FC<Props> = ({
  children,
  defaultMode,
}) => {
  const [area, setArea] = useState<number>(toggleArea(defaultMode));
  const [detailLevel, setDetailLevel] = useState<Options>(defaultMode);

  const toggleDetailLevel = (mode: Options) => {
    setDetailLevel(mode);
    setArea(toggleArea(mode));
  };

  return (
    <DetailLevelContext.Provider
      value={{ detailLevel, area, toggleDetailLevel }}
    >
      {children}
    </DetailLevelContext.Provider>
  );
};
