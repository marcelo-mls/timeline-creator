import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import AppContext from './AppContext';

function AppProvider({ children }) {
  const [year, setYear] = useState('');
  const [historicalEvent, setHistoricalEvent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const context = useMemo(() => ({
    year,
    setYear,
    historicalEvent,
    setHistoricalEvent,
    imageUrl,
    setImageUrl,
  }), []);

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
