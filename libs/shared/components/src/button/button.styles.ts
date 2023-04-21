import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus-visible {
    filter: brightness(1.2);
    transition: all 0.3s ease;
    cursor: pointer;
  }
`;
