import styled from 'styled-components';

export const Panel = styled.div`
  background-color: ${props => props.theme.colors.backgroundContent};
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0.8rem 0.8rem 0.5rem -0.5rem,
    rgba(0, 0, 0, 0.25) 0rem 0.5rem 1rem -0.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h2`
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  text-align: start;
  font-weight: 600;
  font-size: 1.15rem;
  padding-bottom: 0.5rem;
`;
