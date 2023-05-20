import * as S from './theme-switch.styles';

type Props = {
  onClick?: () => void;
};

const ThemeSwitch: React.FC<Props> = ({ onClick }) => {
  return (
    <S.SwitchWrapper>
      <input type="checkbox" onClick={onClick} id="slider" />
      <span className="slider round"></span>
    </S.SwitchWrapper>
  );
};

export default ThemeSwitch;

