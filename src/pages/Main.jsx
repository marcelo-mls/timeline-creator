import React, { useState } from 'react';

import HeaderForm from '../components/HeaderForm';
import Timeline from '../components/Timeline';

function Main() {
  const [timelineData, setTimelineData] = useState(JSON.parse(localStorage.getItem('timeLineData')));

  return (
    <>
      <HeaderForm timelineData={timelineData} setTimelineData={setTimelineData} />
      <Timeline timelineData={timelineData} />
    </>
  );
}

export default Main;
