import styled from 'styled-components';

import searchIcon from './search-icon.svg';

export const InputWrapper = styled.input`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 1rem;

  padding: 1rem 1rem 1rem 3rem;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0.8rem 0.8rem 0.5rem -0.5rem,
    rgba(0, 0, 0, 0.25) 0rem 0.5rem 1rem -0.5rem;

  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: 1rem;
  background-size: 1rem;

  &::placeholder {
    font-style: normal;
    font-size: 1rem;
    line-height: 1.125rem;
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;
