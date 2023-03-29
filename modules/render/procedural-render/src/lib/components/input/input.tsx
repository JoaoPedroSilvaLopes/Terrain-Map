import { forwardRef } from 'react';
import * as S from './input.styles';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = forwardRef<HTMLInputElement, InputProps>(({ ...rest }, ref) => {
  return (
    <S.InputWrapper {...rest} ref={ref} placeholder="Insira uma localização" />
  );
});

export default Input;
