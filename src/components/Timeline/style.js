import styled from 'styled-components';

export const TimelineContainer = styled.div`
  display: flex;
  justify-content: space-around;
  overflow-x: auto;
  width: 100%;

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: space-between;
    min-width: 10%;
    text-align: center;
  }

  p {
    color: white;
    max-width: 120px;
    overflow-x: auto;
  }

  img {
    border: 2px solid #0057b7;
    border-radius: 50%;
    height: 100px;
    object-fit: cover;
    width: 100px;
  }
`;

export const YearText = styled.div`
  color: #0057b7;
  font-size: larger;
  font-weight: 700;
`;
