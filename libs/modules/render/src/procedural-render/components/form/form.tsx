import { Form as BsForm } from 'react-bootstrap';
import { Button, Input, Range } from '@terrain-map/shared/components';
import { useLight, useShadow } from '@terrain-map/shared/core';
import * as S from './form.styles';

type Props = {
  onClick: () => void;
  onSubmit?: () => void;
  themeToggler: () => void;
};

const Form: React.FC<Props> = ({ onSubmit, onClick, themeToggler }) => {
  const { toggleShadow } = useShadow();
  const { toggleLight } = useLight();

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
        <BsForm.Check type="switch" onClick={() => toggleShadow()} />
      </S.SwitchContainer>
      <S.SwitchContainer>
        <span>Iluminação</span>
        <BsForm.Check type="switch" onClick={() => toggleLight()} />
      </S.SwitchContainer>

      <label id="switch" className="switch">
        <input type="checkbox" onClick={themeToggler} id="slider" />
        <span className="slider round"></span>
      </label>
    </S.FormContainer>
  );
};

export default Form;
