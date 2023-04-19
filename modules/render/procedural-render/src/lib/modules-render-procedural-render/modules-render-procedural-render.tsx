import { useState } from 'react';
import { Canvas, Form, Map } from './components';

import * as S from './modules-render-procedural-render.styles';

type Props = {
  themeToggler: () => void
}

const ModulesRenderProceduralRender: React.FC<Props> = ({ themeToggler }) => {
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
};

export default ModulesRenderProceduralRender;
