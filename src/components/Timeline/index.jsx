import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Zoom } from '@mui/material';

import { TimelineContainer, YearText } from './style';
import TooltipButtons from '../TooltipButtons';
import AppContext from '../../context/AppContext';

function Timeline(props) {
  const { handleDelete, handleEdit } = props;

  const { timelineData } = useContext(AppContext);

  return (
    <TimelineContainer>
      {timelineData.map((item, index) => (
        <Tooltip
          arrow
          key={item.historicalEvent}
          placement="bottom"
          TransitionComponent={Zoom}
          title={(
            <TooltipButtons
              param={{ index, year: item.year }}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          )}
        >
          <div className={index % 2 === 0 ? 'up' : 'down'}>
            <YearText>{item.year}</YearText>
            <p>{item.historicalEvent}</p>
            <img src={item.imageUrl} alt={item.historicalEvent} />
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
