import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

import AppContext from './AppContext';
import { setLocalStorage, getLocalStorage } from '../services/localStorage/storageUtils';

function AppProvider({ children }) {
  const [year, setYear] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [historicalEvent, setHistoricalEvent] = useState('');
  const [timelineData, setTimelineData] = useState(JSON.parse(getLocalStorage('timeLineData')));

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

  useEffect(() => {
    setLocalStorage('timeLineData', timelineData);
  }, [timelineData]);

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
