import { FormSelectProps } from 'react-bootstrap';
import * as S from './select.styles';

const Section: React.FC<FormSelectProps> = ({ defaultValue, children, ...rest }) => {
  return <S.Select defaultValue={defaultValue} {...rest}>{children}</S.Select>;
};

export default Section;
