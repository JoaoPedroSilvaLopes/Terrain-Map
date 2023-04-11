import styled from 'styled-components';

export const FormContainer = styled.div`
  padding-inline: 1.875rem;
  margin-block: 1.25rem;

  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
  width: 100%;

  button,
  input:not([type='range']):not([type='checkbox']) {
    min-height: 2.25rem;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 0.3125rem;

    color: ${(props) => props.theme.colors.textSecondary};

    font-size: 0.75rem;

    outline: none;
    border: none;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 0.75rem;

    padding-inline: 1rem;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }

  /* input[type='range'] {
    background: none;
    box-shadow: none;
  } */
`;

export const MenuTitle = styled.h1`
  font-size: 1.5625rem;
  font-weight: 700;
  line-height: 2.375rem;
`;

export const MenuSubTitile = styled.h2`
  font-size: 1.2rem;
`;

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
