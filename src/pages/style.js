import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
`;

export const IntroText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  color: white;
  font-size: 250%;
  font-weight: 500;

  animation: pulse 2s infinite ease-in-out;

  @keyframes pulse {
  0% {
    font-size: 250%;
  }
  50% {
    font-size: 255%;
  }
  100% {
    font-size: 250%;
  }
}
`;
