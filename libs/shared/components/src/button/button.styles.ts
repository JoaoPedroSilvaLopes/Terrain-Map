import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: none;
  outline: none;
  color: ${(props) => props.theme.colors.textSecondary};
  background: ${(props) => props.theme.colors.primary};
  border-radius: 0.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0.8rem 0.8rem 0.5rem -0.5rem,
    rgba(0, 0, 0, 0.25) 0rem 0.5rem 1rem -0.5rem;

  &:hover,
  &:focus-visible {
    filter: brightness(1.2);
    transition: all 0.3s ease;
    cursor: pointer;
  }
`;
