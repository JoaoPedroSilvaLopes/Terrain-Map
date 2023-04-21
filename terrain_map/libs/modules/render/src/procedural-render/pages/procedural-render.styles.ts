import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const MapWrapper = styled.div`
  min-width: 75%;
  background: #3333;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

  #threejs {
    width: 100%;
    height: 100%;
  }

  .leaflet-container {
    width: 100%;
    height: 100%;
  }
`;

export const MenuWrapper = styled.div`
  min-width: 25%;
  background: ${(props) => props.theme.colors.background};

  display: flex;
  flex-direction: row;
`;

export const FormContainer = styled.div`
  padding-inline: 1.875rem;
  margin-block: 1.25rem;

  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
  width: 100%;
`;

export const MenuTitle = styled.h1`
  margin: 0;
  color: ${(props) => props.theme.colors.textPrimary};
  text-align: center;
  font-size: 1.5625rem;
  font-weight: 700;
  line-height: 2.375rem;
`;
