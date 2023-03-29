import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const MapWrapper = styled.div`
  min-width: 75%;
  background: #3333;
`;

export const MenuWrapper = styled.div`
  min-width: 25%;
  background: ${(props) => props.theme.colors.background};

  display: flex;
  flex-direction: row;
  gap: 0.9375rem;
`;

export const FormContainer = styled.div`
  padding-inline: 1.875rem;
  margin-block: 1.25rem;

  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const MenuTitle = styled.div`
  color: ${(props) => props.theme.colors.textPrimary};
  text-align: center;
  font-size: 1.9rem;
  font-weight: 700;
  line-height: 2.375rem;
`;
