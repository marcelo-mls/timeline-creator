import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Zoom } from '@mui/material';

import { TimelineContainer, YearText } from './style';
import TooltipButtons from '../TooltipButtons';
import AppContext from '../../context/AppContext';

function Timeline() {
  const { timelineData } = useContext(AppContext);

  return (
    <TimelineContainer>
      {timelineData.map(({ historicalEvent, year, imageUrl }, index) => (
        <Tooltip
          arrow
          key={historicalEvent}
          placement="bottom"
          TransitionComponent={Zoom}
          title={<TooltipButtons params={{ index, year }} />}
        >
          <div className={index % 2 === 0 ? 'up' : 'down'}>
            <YearText>{year}</YearText>
            <p>{historicalEvent}</p>
            <img src={imageUrl} alt={historicalEvent} />
          </div>
        </Tooltip>
      ))}
    </TimelineContainer>
  );
}

Timeline.propTypes = {
  timelineData: PropTypes.array,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
}.isRequired;

export default Timeline;
