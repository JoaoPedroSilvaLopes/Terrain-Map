import { Form as BsForm } from 'react-bootstrap';
import styled from 'styled-components';

export const Range = styled(BsForm.Range)`
  &::-webkit-slider-thumb {
    background-color: ${(props) => props.theme.colors.primary};
  }

  &::-moz-range-thumb {
    background-color: ${(props) => props.theme.colors.primary};
  }

  &::-ms-thumb {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
