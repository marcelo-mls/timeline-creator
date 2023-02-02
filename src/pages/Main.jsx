import React, { useState } from 'react';

import HeaderForm from '../components/HeaderForm';
import Timeline from '../components/Timeline';
import { MainContainer, IntroText } from './style';

function Main() {
  const [timelineData, setTimelineData] = useState(JSON.parse(localStorage.getItem('timeLineData')) || []);

  return (
    <MainContainer>
      <HeaderForm timelineData={timelineData} setTimelineData={setTimelineData} />
      { timelineData.length === 0
        ? <IntroText>Use the inputs above to start creating your Timeline...</IntroText>
        : <Timeline timelineData={timelineData} />}
    </MainContainer>
  );
}

export default Main;
