import { useState } from 'react';
import { Canvas, Form, Map } from '../components';
import { TesteMinecraft } from '@terrain-map/shared/assets';

import * as S from './procedural-render.styles';
import { createNoise2D } from 'simplex-noise';

type Props = {
  themeToggler: () => void;
};

export const ProceduralRender: React.FC<Props> = ({ themeToggler }) => {
  const defaultCoordenates = {
    lat: -3.871284,
    lng: -38.613565,
  };
  const [mapa, setMapa] = useState<google.maps.Map | null>(null);
  const [generate, setGenerate] = useState<boolean>(false);
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [bounds, setBounds] = useState<google.maps.LatLng[] | undefined>(
    undefined
  );
  const noise2D = createNoise2D();

  const onClickGenerate = () => {
    handleBounds()
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

  const handleBounds = () => {
    if (mapa) {
      const bounds = mapa.getBounds();
      const boundNE = bounds?.getNorthEast();
      const boundSW = bounds?.getSouthWest();

      if (boundNE && boundSW) {
        boundNE && boundSW && setBounds([boundNE, boundSW]);
      }
    }
  };

  console.log('aaaaaaaaaa')

  return (
    <S.PageWrapper>
      <S.MapWrapper>
        {generate && image ? (
          <Canvas image={image} generate={generate} bounds={bounds} noise2D={noise2D}/>
        ) : (
          <Map
            coordenadas={defaultCoordenates}
            generate={generate}
            setBounds={setBounds}
            onLoad={(value) => setMapa(value)}
          />
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
