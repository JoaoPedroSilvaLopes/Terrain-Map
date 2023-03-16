import styled from 'styled-components';
import { theme } from './theme';

export const Wrapper = styled.div`
  margin: 0
  padding: 0
  box-sizing: border-box;

  font-family: 'Poppins', sans-serif;
  color: ${theme.colors.textPrimary};

  display: flex;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: ${theme.fonts.boldWeight};

  font-style: normal;
  font-size: 1.563rem;
  line-height: 2.344rem;
`;
