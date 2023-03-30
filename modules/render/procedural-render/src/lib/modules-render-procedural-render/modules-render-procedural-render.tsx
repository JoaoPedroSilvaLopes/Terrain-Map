import { Form } from '../components';
import * as S from './modules-render-procedural-render.styles';

const ModulesRenderProceduralRender: React.FC = () => {
  return (
    <S.PageWrapper>
      <S.MapWrapper />
      <S.MenuWrapper>
        <Form />
      </S.MenuWrapper>
    </S.PageWrapper>
  );
};

export default ModulesRenderProceduralRender;
