import styled from 'styled-components';

export const SwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 3.75rem;
  height: 1.25rem;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1.5rem;

  input {
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
    height: 2.25rem;
    width: 2.25rem;
    left: 0rem;
    bottom: 0.25rem;
    top: 0;
    bottom: 0;
    margin: auto 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    box-shadow: 0 0rem 0.9375rem #2020203d;
    background: white url('https://i.ibb.co/7JfqXxB/sunny.png');
    background-repeat: no-repeat;
    background-position: center;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(1.5rem);
    -ms-transform: translateX(1.5rem);
    transform: translateX(1.5rem);
    background: white url('https://i.ibb.co/FxzBYR9/night.png');
    background-repeat: no-repeat;
    background-position: center;
  }

  input:checked + .slider {
    background-color: ${(props) => props.theme.colors.textSecondary};
  }

  input:focus + .slider {
    box-shadow: 0 0 0.0625rem #2196f3;
  }

  .slider.round {
    border-radius: 2.125rem;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
