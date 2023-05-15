import { forwardRef } from 'react';
import { Spinner } from 'react-bootstrap';
import * as S from './button.styles';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  isLoading?: boolean;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ isLoading, children, ...rest }, ref) => {
    return (
      <S.ButtonWrapper {...rest} ref={ref}>
        {isLoading ? (
          <Spinner animation="border" variant="light" size="sm" />
        ) : (
          children
        )}
      </S.ButtonWrapper>
    );
  }
);

export default Button;
