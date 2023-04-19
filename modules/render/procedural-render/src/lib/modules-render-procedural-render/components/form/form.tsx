import { Form as BsForm } from 'react-bootstrap';
import { Button, Input, Range } from '@procedural-render/components';
import * as S from './form.styles';

type Props = {
  onClick: () => void;
  onSubmit?: () => void;
  themeToggler: () => void
};

const Form: React.FC<Props> = ({ onSubmit, onClick, themeToggler }) => {
  return (
    <S.FormContainer>
      <S.MenuTitle>Procedural Render</S.MenuTitle>
      <Input />
      <Button onClick={() => onClick()}>Gerar Terraform Hexagonal</Button>
      <div className="mt-3">
        <S.MenuSubTitle>Nível de detalhe</S.MenuSubTitle>
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

      <button onClick={themeToggler}>Mudar Tema</button>
    </S.FormContainer>
  );
};

export default Form;
