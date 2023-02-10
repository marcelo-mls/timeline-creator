import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import AppContext from './AppContext';

function AppProvider({ children }) {
  const [year, setYear] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [historicalEvent, setHistoricalEvent] = useState('');
  const [timelineData, setTimelineData] = useState(JSON.parse(localStorage.getItem('timeLineData')) || []);

  const context = useMemo(() => ({
    year,
    setYear,
    historicalEvent,
    setHistoricalEvent,
    imageUrl,
    setImageUrl,
    timelineData,
    setTimelineData,
  }), [year, historicalEvent, imageUrl, timelineData]);

  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default AppProvider;
