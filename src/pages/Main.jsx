import React, { useContext } from 'react';
import { toast } from 'react-toastify';

import HeaderForm from '../components/HeaderForm';
import Timeline from '../components/Timeline';
import WelcomeText from '../components/WelcomeText';
import AppContext from '../context/AppContext';
import MainContainer from './style';

function Main() {
  const {
    timelineData,
    setTimelineData,
  } = useContext(AppContext);

  const handleDelete = (index, year) => {
    const newTimeline = timelineData.filter((_historicalEvent, i) => i !== index);
    setTimelineData(newTimeline);
    localStorage.setItem('timeLineData', JSON.stringify(newTimeline));

    toast.success(`Event from ${year} deleted!`);
  };

  const handleEdit = (index, year) => {
    // const eventToEdit = timelineData[index];

    // setTimelineData(newTimeline);
    // localStorage.setItem('timeLineData', JSON.stringify(newTimeline));

    toast.success(`Event from ${year} Edited!`);
  };

  return (
    <MainContainer>

      <HeaderForm
        timelineData={timelineData}
        setTimelineData={setTimelineData}
      />
      { timelineData.length === 0 ? <WelcomeText /> : (
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
