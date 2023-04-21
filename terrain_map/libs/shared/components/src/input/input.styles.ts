import styled from 'styled-components';

import searchIcon from './search-icon.svg';

export const InputWrapper = styled.input`
  &::placeholder {
    font-style: normal;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1.125rem;
    color: ${(props) => props.theme.colors.textSecondary};
    padding-left: 1.5rem;

    background-image: url(${searchIcon});
    background-position: left;
    background-repeat: no-repeat;
    background-size: 1rem;
  }
`;
