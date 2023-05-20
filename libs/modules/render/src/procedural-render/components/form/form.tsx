import { Form as BsForm } from 'react-bootstrap';
import {
  Button,
  Input,
  Panel,
  Range,
  Select,
  ThemeSwitch,
} from '@terrain-map/shared/components';
import { useLight, useShadow } from '@terrain-map/shared/core';
import * as S from './form.styles';

type Props = {
  onClick: () => void;
  themeToggler: () => void;
};

const Form: React.FC<Props> = ({ onClick, themeToggler }) => {
  const { shadow, toggleShadow } = useShadow();
  const { light, toggleLight } = useLight();

  return (
    <S.FormContainer>
      <S.MenuTitle>Procedural Render</S.MenuTitle>
      <Input placeholder="Pesquisar" />
      <Panel title="Tipo do modelo">
        <S.SwitchContainer>
          <span>Cúbico</span>
          <BsForm.Check type="switch" />
        </S.SwitchContainer>
        <S.SwitchContainer>
          <span>Hexagonal</span>
          <BsForm.Check type="switch" />
        </S.SwitchContainer>
        <S.SwitchContainer>
          <span>Nível de detalhe</span>
          <Select defaultValue={32}>
            <option value={16}>Baixo</option>
            <option value={32}>Médio</option>
            <option value={64}>Alto</option>
          </Select>
        </S.SwitchContainer>
      </Panel>
      <Panel title="Sombras e Iluminação">
        <S.SwitchContainer>
          <span>Sombras</span>
          <BsForm.Check
            type="switch"
            checked={shadow}
            onClick={() => toggleShadow()}
          />
        </S.SwitchContainer>
        <S.SwitchContainer>
          <span>Iluminação</span>
          <BsForm.Check
            type="switch"
            checked={light}
            onClick={() => toggleLight()}
          />
        </S.SwitchContainer>
      </Panel>
      <Button onClick={() => onClick()}>Gerar Modelo 3D</Button>
      <ThemeSwitch onClick={themeToggler} />
    </S.FormContainer>
  );
};

export default Form;
