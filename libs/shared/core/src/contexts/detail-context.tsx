import { ReactNode, createContext, useState } from 'react';

export type Options = 'baixo' | 'medio' | 'alto';

type Props = {
  defaultMode: Options;
  children: ReactNode;
};

type DetailLevelContextType = {
  detailLevel: Options;
  sizeDetailtMesh: number;
  toggleDetailLevel: (mode: Options) => void;
};

export const DetailLevelContext: React.Context<DetailLevelContextType> =
  createContext({} as DetailLevelContextType);

const toggleArea = (mode: Options): number => {
  switch (mode) {
    case 'alto':
      return 0.25;
      break;
    case 'medio':
      return 0.5;
      break;
    case 'baixo':
      return 1;
      break;
  }
};

export const DetailLevelProvider: React.FC<Props> = ({
  children,
  defaultMode,
}) => {
  const [sizeDetailtMesh, setSizeDetailtMesh] = useState<number>(toggleArea(defaultMode));
  const [detailLevel, setDetailLevel] = useState<Options>(defaultMode);

  const toggleDetailLevel = (mode: Options) => {
    setDetailLevel(mode);
    setSizeDetailtMesh(toggleArea(mode));
  };

  return (
    <DetailLevelContext.Provider
      value={{ detailLevel, sizeDetailtMesh, toggleDetailLevel }}
    >
      {children}
    </DetailLevelContext.Provider>
  );
};
