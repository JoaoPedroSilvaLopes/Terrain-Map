import { theme } from '@procedural-render/shared';
import styled from 'styled-components';

export const Wrapper = styled.div`
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
