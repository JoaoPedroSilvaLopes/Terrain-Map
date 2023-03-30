import Button from '../button/button';
import Input from '../input/input';
import * as S from './formt.styles';

const Form: React.FC = () => {
  return (
    <S.FormContainer>
      <S.MenuTitle>Procedural Render</S.MenuTitle>
      <Input />
      <Button>Gerar Terraform Hexagonal</Button>
    </S.FormContainer>
  );
};

export default Form;
