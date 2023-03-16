import { theme } from '@procedural-render/shared';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
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

  background-color: #333;
`;

export const Title = styled.h1`
  font-weight: ${theme.fonts.boldWeight};

  font-style: normal;
  font-size: 1.563rem;
  line-height: 2.344rem;
`;
