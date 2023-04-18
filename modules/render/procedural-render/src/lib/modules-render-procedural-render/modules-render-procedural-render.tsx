import { useState } from 'react';
import { Canvas, Form, Map } from './components';

import * as S from './modules-render-procedural-render.styles';

type Props = {
  toggleTheme: () => void;
};

const ModulesRenderProceduralRender: React.FC<Props> = ({ toggleTheme }) => {
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
        <Form onClick={onClick} toggleTheme={toggleTheme} />
      </S.MenuWrapper>
    </S.PageWrapper>
  );
};

export default ModulesRenderProceduralRender;
