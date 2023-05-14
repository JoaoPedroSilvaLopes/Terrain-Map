import { useState } from 'react';
import { Canvas, Form, Map } from '../components';
import * as S from './procedural-render.styles';

type Props = {
  themeToggler: () => void;
};

export const ProceduralRender: React.FC<Props> = ({ themeToggler }) => {
  const [generate, setGenerate] = useState<boolean>(false);
  const [area, setArea] = useState<number>(5);
  const [coordenadas, setCoordenadas] = useState<google.maps.LatLngLiteral>({
    lat: -3.871284,
    lng: -38.613565,
  });

  const onClick = () => {
    console.log('tirou print');
    setGenerate(!generate)
  };

  return (
    <S.PageWrapper>
      <S.MapWrapper>
        {generate ? <Canvas area={area} /> : <Map coordenadas={coordenadas} />}
      </S.MapWrapper>
      <S.MenuWrapper>
        <Form onClick={onClick} themeToggler={themeToggler} />
      </S.MenuWrapper>
    </S.PageWrapper>
  );
};
