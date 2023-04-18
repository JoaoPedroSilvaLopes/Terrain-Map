import styled from 'styled-components';

export const FormContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  button,
  input:not([type='range']):not([type='checkbox']) {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.textSecondary};
    font-size: 1rem;
    padding: 1rem;
    outline: none;
    border: none;
    border-radius: 0.75rem;
    font-weight: 600;

    ::placeholder {
      font-size: 1rem;
    }

    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }

  input[type='range'] {
    background: none;
    box-shadow: none;
  }
`;

export const MenuTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2.3rem;
`;

export const MenuSubTitle = styled.h2`
  text-align: start;
  font-size: 1.25rem;
`;

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: ${(props) => props.theme.colors.textPrimary};
  }
`;
