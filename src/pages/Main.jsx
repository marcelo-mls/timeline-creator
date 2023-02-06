import React, { useState } from 'react';
import { toast } from 'react-toastify';

import HeaderForm from '../components/HeaderForm';
import Timeline from '../components/Timeline';
import { MainContainer, IntroText } from './style';

function Main() {
  const [timelineData, setTimelineData] = useState(JSON.parse(localStorage.getItem('timeLineData')) || []);

  const handleDelete = (index, year) => {
    const newTimeline = timelineData.filter((_event, i) => i !== index);
    setTimelineData(newTimeline);
    localStorage.setItem('timeLineData', JSON.stringify(newTimeline));

    toast.success(`Event from ${year} deleted!`);
  };

  const handleEdit = (index, year) => {
    const eventToEdit = timelineData[index];

    console.log(eventToEdit);

    // setTimelineData(newTimeline);
    // localStorage.setItem('timeLineData', JSON.stringify(newTimeline));

    toast.success(`Event from ${year} Edited!`);
  };

  return (
    <MainContainer>
      <HeaderForm timelineData={timelineData} setTimelineData={setTimelineData} />
      { timelineData.length === 0
        ? <IntroText>Use the inputs above to start creating your Timeline...</IntroText>
        : (
          <Timeline
            timelineData={timelineData}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        )}
    </MainContainer>
  );
}

export default Main;
