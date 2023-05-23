import { useState } from 'react';
import { Canvas, Form, Map } from '../components';
import { TesteMinecraft } from '@terrain-map/shared/assets';

import * as S from './procedural-render.styles';

type Props = {
  themeToggler: () => void;
};

export const ProceduralRender: React.FC<Props> = ({ themeToggler }) => {
  const [generate, setGenerate] = useState<boolean>(false);
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [coordenadas, setCoordenadas] = useState<google.maps.LatLngLiteral>({
    lat: -3.871284,
    lng: -38.613565,
  });

  const onClickGenerate = () => {
    const img = new Image();
    img.src = TesteMinecraft;
    img.onload = () => {
      setImage(img);
    };
    setGenerate(!generate);
  };

  const onClickClear = () => {
    setGenerate(!generate);
  };

  return (
    <S.PageWrapper>
      <S.MapWrapper>
        {generate && image ? (
          <Canvas image={image} generate={generate} />
        ) : (
          <Map coordenadas={coordenadas} />
        )}
      </S.MapWrapper>
      <S.MenuWrapper>
        <Form
          onClick={!generate ? onClickGenerate : onClickClear}
          themeToggler={themeToggler}
          isGenerate={generate}
        />
      </S.MenuWrapper>
    </S.PageWrapper>
  );
};
