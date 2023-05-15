import { forwardRef } from 'react';
import { FormRangeProps } from 'react-bootstrap/esm/FormRange';
import * as S from './range.styles';

type Props = FormRangeProps & {
  placeholder?: string;
};

const Range = forwardRef<HTMLInputElement, Props>(({ ...props }, ref) => {
  return <S.Range min={0} max={100} {...props} ref={ref} />;
});

export default Range;
