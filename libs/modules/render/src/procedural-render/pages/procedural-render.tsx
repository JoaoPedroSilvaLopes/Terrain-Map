import { useState } from 'react';
import { Canvas, Form, Map } from '../components';
import * as S from './procedural-render.styles';

import { TesteMinecraft } from '@terrain-map/shared/assets';

type Props = {
  themeToggler: () => void;
};

export const ProceduralRender: React.FC<Props> = ({ themeToggler }) => {
  const [generate, setGenerate] = useState<boolean>(false);
  const [area, setArea] = useState<number>(50);
  const [image, setImage] = useState<HTMLImageElement | null>(null);

  const [coordenadas, setCoordenadas] = useState<google.maps.LatLngLiteral>({
    lat: -3.871284,
    lng: -38.613565,
  });

  const onClick = () => {
    const img = new Image();
    img.src = TesteMinecraft;

    img.onload = () => {
      setImage(img);
    };
    setGenerate(!generate);
  };

  return (
    <S.PageWrapper>
      <S.MapWrapper>
        {generate && image ? (
          <Canvas area={area} image={image} />
        ) : (
          <Map coordenadas={coordenadas} />
        )}
      </S.MapWrapper>
      <S.MenuWrapper>
        <Form onClick={onClick} themeToggler={themeToggler} />
      </S.MenuWrapper>
    </S.PageWrapper>
  );
};
