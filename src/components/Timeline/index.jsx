import React from 'react';
import PropTypes from 'prop-types';
import { TimelineContainer, YearText } from './style';

function Timeline(props) {
  const { timelineData } = props;

  return (
    <TimelineContainer className="timeline">
      {timelineData.map((item, index) => (
        <div key={item.event} className={index % 2 === 0 ? 'up' : 'down'}>
          <YearText>{item.year}</YearText>
          <p>{item.event}</p>
          <img src={item.image} alt={item.event} />
        </div>
      ))}
    </TimelineContainer>
  );
}

Timeline.propTypes = {
  timelineData: PropTypes.array,
}.isRequired;

export default Timeline;
