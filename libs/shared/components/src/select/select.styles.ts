import styled from 'styled-components';
import { Form as BsForm } from 'react-bootstrap';

export const Select = styled(BsForm.Select)`
  height: 2.5rem;
  padding: 0.5rem;
  border: none;
  font-size: 1rem;

  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.textPrimary};

  width: 6rem;
  border-radius: 0.5rem;
`
