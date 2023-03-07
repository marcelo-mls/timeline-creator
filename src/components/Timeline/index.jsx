import React, {
  useContext, useRef, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Zoom } from '@mui/material';

import { TimelineContainer, YearText, Image } from './style';
import TooltipButtons from '../TooltipButtons';
import AppContext from '../../context/AppContext';

function Timeline() {
  const { timelineData } = useContext(AppContext);
  const ref = useRef(null);
  const [myWidth, setMyWidth] = useState('');

  useEffect(() => {
    const width = ref.current.offsetWidth;
    setMyWidth(width);
  }, [ref.current]);

  return (
    <TimelineContainer myWidth={myWidth * timelineData.length}>
      {timelineData.map(({ historicalEvent, year, imageUrl }, index) => (
        <div key={historicalEvent} ref={ref}>
          <YearText>{year}</YearText>
          <p>{historicalEvent}</p>
          <Tooltip
            arrow
            placement="bottom"
            TransitionComponent={Zoom}
            title={<TooltipButtons params={{ index, year }} />}
          >
            <Image src={imageUrl} alt={historicalEvent} />
          </Tooltip>
        </div>
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
