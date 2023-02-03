import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, IconButton, Zoom } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { TimelineContainer, YearText } from './style';

function Timeline(props) {
  const { timelineData, handleDelete } = props;

  return (
    <TimelineContainer>
      {timelineData.map((item, index) => (
        <Tooltip
          title={(
            <IconButton onClick={() => handleDelete(index, item.year)}>
              <DeleteIcon color="error" />
            </IconButton>
          )}
          key={item.event}
          arrow
          TransitionComponent={Zoom}
          placement="bottom"
        >
          <div className={index % 2 === 0 ? 'up' : 'down'}>
            <YearText>{item.year}</YearText>
            <p>{item.event}</p>
            <img src={item.image} alt={item.event} />
          </div>
        </Tooltip>
      ))}
    </TimelineContainer>
  );
}

Timeline.propTypes = {
  timelineData: PropTypes.array,
}.isRequired;

export default Timeline;
