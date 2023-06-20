import { Form as BsForm } from 'react-bootstrap';
import {
  Button,
  Input,
  Panel,
  Select,
  ThemeSwitch,
} from '@terrain-map/shared/components';
import {
  Options,
  useDetail,
  useLight,
  useModel,
  useShadow,
  useVisualization,
} from '@terrain-map/shared/core';
import * as S from './form.styles';

type Props = {
  onClick: () => void;
  themeToggler: () => void;
  isGenerate: boolean;
};

const Form: React.FC<Props> = ({ onClick, themeToggler, isGenerate }) => {
  const { model, toggleModel } = useModel();
  const { detailLevel, toggleDetailLevel } = useDetail();
  const { light, toggleLight } = useLight();
  const { shadow, toggleShadow } = useShadow();
  const { mode, toggleModeVisualization } = useVisualization()

  const controlLight = () => {
    toggleLight();
    shadow && toggleShadow();
  };

  return (
    <S.FormContainer>
      <S.MenuTitle>Procedural Render</S.MenuTitle>
      {!isGenerate && <Input placeholder="Pesquisar" />}
      <Panel title="Tipo do modelo">
        <S.SwitchContainer>
          <span>Cúbico</span>
          <BsForm.Check
            type="switch"
            checked={model === 'cube'}
            disabled={model === 'cube'}
            onClick={() => toggleModel('cube')}
          />
        </S.SwitchContainer>
        <S.SwitchContainer>
          <span>Hexagonal</span>
          <BsForm.Check
            type="switch"
            checked={model === 'hexagon'}
            disabled={model === 'hexagon'}
            onClick={() => toggleModel('hexagon')}
          />
        </S.SwitchContainer>
        <S.SwitchContainer>
          <span>Nível de detalhe</span>
          <Select
            defaultValue={detailLevel}
            onChange={(e) => toggleDetailLevel(e.target.value as Options)}
          >
            <option value={'baixo'}>Baixo</option>
            <option value={'medio'}>Médio</option>
            <option value={'alto'}>Alto</option>
          </Select>
        </S.SwitchContainer>
      </Panel>
      <Panel title="Tipo de visualização">
        <S.SwitchContainer>
          <span>Geográfica</span>
          <BsForm.Check
            type="switch"
            checked={mode === 'geo'}
            disabled={mode === 'geo'}
            onClick={() => toggleModeVisualization('geo')}
          />
        </S.SwitchContainer>
        <S.SwitchContainer>
          <span>Mapa de Alturas</span>
          <BsForm.Check
            type="switch"
            checked={mode === 'height'}
            disabled={mode === 'height'}
            onClick={() => toggleModeVisualization('height')}
          />
        </S.SwitchContainer>
        <S.SwitchContainer>
          <span>Wireframe</span>
          <BsForm.Check
            type="switch"
            checked={mode === 'wireframe'}
            disabled={mode === 'wireframe'}
            onClick={() => toggleModeVisualization('wireframe')}
          />
        </S.SwitchContainer>
      </Panel>
      <Panel title="Sombras e Iluminação">
        <S.SwitchContainer>
          <span>Iluminação</span>
          <BsForm.Check
            type="switch"
            checked={light}
            onClick={() => controlLight()}
          />
        </S.SwitchContainer>
        {light && (
          <S.SwitchContainer>
            <span>Sombras</span>
            <BsForm.Check
              type="switch"
              checked={shadow}
              onClick={() => toggleShadow()}
            />
          </S.SwitchContainer>
        )}
      </Panel>
      <Button onClick={() => onClick()}>
        {isGenerate ? 'Pesquisar outra localização' : 'Gerar Modelo 3D'}
      </Button>
      <ThemeSwitch onClick={themeToggler} />
    </S.FormContainer>
  );
};

export default Form;
