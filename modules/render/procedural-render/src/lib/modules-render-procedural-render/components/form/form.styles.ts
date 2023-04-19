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

  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 20px;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 1.5rem;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 36px;
    width: 36px;
    left: 0px;
    bottom: 4px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    box-shadow: 0 0px 15px #2020203d;
    background: white url('https://i.ibb.co/7JfqXxB/sunny.png');
    background-repeat: no-repeat;
    background-position: center;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(24px);
    -ms-transform: translateX(24px);
    transform: translateX(24px);
    background: white url('https://i.ibb.co/FxzBYR9/night.png');
    background-repeat: no-repeat;
    background-position: center;
  }

  input:checked + .slider {
    background-color: ${(props) => props.theme.colors.textSecondary};
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export const MenuTitle = styled.h1`
  font-size: 2rem;
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
