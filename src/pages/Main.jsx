import React, { useContext } from 'react';
import { toast } from 'react-toastify';

import HeaderForm from '../components/HeaderForm';
import Timeline from '../components/Timeline';
import WelcomeText from '../components/WelcomeText';
import AppContext from '../context/AppContext';
import MainContainer from './style';

function Main() {
  const { timelineData, setTimelineData } = useContext(AppContext);

  const handleDelete = (param) => {
    const newTimeline = timelineData.filter((_historicalEvent, i) => i !== param.index);
    setTimelineData(newTimeline);
    localStorage.setItem('timeLineData', JSON.stringify(newTimeline));

    toast.success(`Event from ${param.year} deleted!`);
  };

  const handleEdit = (param) => {
    // const eventToEdit = timelineData[param.index];
    // setTimelineData(newTimeline);
    // localStorage.setItem('timeLineData', JSON.stringify(newTimeline));

    toast.success(`Event from ${param.year} Edited!`);
  };

  return (
    <MainContainer>
      <HeaderForm />
      {
        timelineData.length === 0
          ? <WelcomeText />
          : <Timeline handleDelete={handleDelete} handleEdit={handleEdit} />
      }
    </MainContainer>
  );
}

export default Main;
