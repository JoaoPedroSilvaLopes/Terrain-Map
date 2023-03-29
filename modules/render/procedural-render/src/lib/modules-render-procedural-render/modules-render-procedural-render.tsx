import { Input } from '../components';
import * as S from './modules-render-procedural-render.styles';

const ModulesRenderProceduralRender: React.FC = () => {
  return (
    <S.PageWrapper>
      <S.MapWrapper></S.MapWrapper>
      <S.MenuWrapper>
        <S.FormContainer>
          <S.MenuTitle>Procedural Render</S.MenuTitle>
          <Input />
        </S.FormContainer>
      </S.MenuWrapper>
    </S.PageWrapper>
  );
};

export default ModulesRenderProceduralRender;
