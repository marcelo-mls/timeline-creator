import React from 'react';
import PropTypes from 'prop-types';
import './Timeline.css';

function Timeline(props) {
  const { timelineData } = props;

  return (
    <div>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div key={item.event} className={index % 2 === 0 ? 'event left' : 'event right'}>
            <p className="year">{item.year}</p>
            <p>{item.event}</p>
            <img src={item.image} alt={item.event} />
          </div>
        ))}
      </div>

    </div>
  );
}

Timeline.propTypes = {
  timelineData: PropTypes.array,
}.isRequired;

export default Timeline;
