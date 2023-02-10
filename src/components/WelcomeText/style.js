import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  flex-grow: 1;
  user-select: none;

  div {
    color: white;
    font-weight: 700;
    font-size: 375%;
    opacity: .5;

    animation: bounce 1.5s infinite ease-in-out;

    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-2px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }

  div:hover {
    opacity: 1;
  }
`;

export const Image = styled.img`
  color: white;
  height: 50vh;
  opacity: .5;

  animation: bounce-up 1.5s infinite ease-in-out;

  @keyframes bounce-up {
    0% {
      transform: translateY(15px);
    }
    50% {
      transform: translateY(-30px) scaleY(1.10);
    }
    100% {
      transform: translateY(15px);
    }
  }
`;

export const EnhancedText = styled.p`
  background-color: #0277BD;
  color: white;
  font-size: 140%;
`;
