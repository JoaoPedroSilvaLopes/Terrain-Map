import styled from 'styled-components';

export const InputWrapper = styled.input`
  min-height: 2.25rem;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 0.3125rem;

  color: ${(props) => props.theme.colors.textSecondary};

  font-size: 0.75rem;
`;
