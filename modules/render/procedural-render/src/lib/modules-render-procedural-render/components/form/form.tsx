import { Form as BsForm } from 'react-bootstrap';
import { Button, Input, Range } from '@procedural-render/components';
import * as S from './form.styles';

const Form: React.FC = () => {
  return (
    <S.FormContainer>
      <S.MenuTitle>Procedural Render</S.MenuTitle>
      <Input />
      <Button>Gerar Terraform Hexagonal</Button>
      <div className="mt-3">
        <S.MenuSubTitile>Nível de detalhe</S.MenuSubTitile>
        <Range />
      </div>
      <S.SwitchContainer>
        <span>Sombras</span>
        <BsForm.Check type="switch" />
      </S.SwitchContainer>
      <S.SwitchContainer>
        <span>Iluminação</span>
        <BsForm.Check type="switch" />
      </S.SwitchContainer>
    </S.FormContainer>
  );
};

export default Form;
