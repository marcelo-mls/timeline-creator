import styled from 'styled-components';

export const TimelineContainer = styled.main`
  display: flex;
  justify-content: space-around;
  /* justify-content: ${(props) => (props.cards > 10 ? 'center' : 'space-around')}; */
  align-items: center;
  flex-grow: 1;
  flex-basis: auto;
  overflow-x: auto;
  position: relative;

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: space-between;
    min-width: 10%;
    text-align: center;
    height: 218px;
    margin-bottom: 128px;
  }

  p {
    color: white;
    max-width: 120px;
    overflow-x: auto;
  }

  &:after {
    content: '';
    height: 4px;
    /* width: ${(props) => props.myWidth}px; */
    width: 100%;
    position: absolute;
    background-color: #0277BD;
    top: 50%;
    z-index: -1;
  }
`;

export const YearText = styled.h1`
  color: #0277BD;
  font-size: larger;
  font-weight: 700;
`;

export const Image = styled.img`
  border: 3px solid #0277BD;
  background-color: white;
  border-radius: 50%;
  height: 100px;
  object-fit: cover;
  width: 100px;
  transition: transform 800ms ease;

  &:hover {
    transform: scale(1.1)
  }
`;
