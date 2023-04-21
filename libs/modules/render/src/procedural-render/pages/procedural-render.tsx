import { useState } from "react";
import * as S from './procedural-render.styles'
import { Canvas, Form, Map } from "../components";

type Props = {
  themeToggler: () => void
}

export const ProceduralRender: React.FC<Props> = ({ themeToggler }) => {
  const [generate, setGenerate] = useState<boolean>(false);
  const [area, setArea] = useState<number>(5);

  const onClick = () => {
    console.log('tirou print');
    //setGenerate(!generate)
  };

  return (
    <S.PageWrapper>
      <S.MapWrapper>{generate ? <Canvas area={area} /> : <Map />}</S.MapWrapper>
      <S.MenuWrapper>
        <Form onClick={onClick} themeToggler={themeToggler} />
      </S.MenuWrapper>
    </S.PageWrapper>
  );
}