import React, { useContext } from 'react';

import HeaderForm from '../components/HeaderForm';
import Timeline from '../components/Timeline';
import WelcomeText from '../components/WelcomeText';
import MainContainer from './style';
import AppContext from '../context/AppContext';

function Main() {
  const { timelineData } = useContext(AppContext);

  return (
    <MainContainer>
      <HeaderForm />
      {
        timelineData.length === 0
          ? <WelcomeText />
          : <Timeline />
      }
    </MainContainer>
  );
}

export default Main;
