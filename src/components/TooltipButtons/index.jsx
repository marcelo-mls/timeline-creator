import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import { toast } from 'react-toastify';

import AppContext from '../../context/AppContext';

function TooltipButtons(props) {
  const { params } = props;
  const { timelineData, setTimelineData } = useContext(AppContext);

  const handleDelete = (param) => {
    const newTimeline = timelineData.filter((_event, index) => index !== param.index);
    setTimelineData(newTimeline);

    toast.success(`Event from ${param.year} deleted!`);
  };

  const handleEdit = (param) => {
    // const eventToEdit = timelineData[param.index];
    // setTimelineData(newTimeline);
    // localStorage.setItem('timeLineData', JSON.stringify(newTimeline));

    toast.success(`Event from ${param.year} Edited!`);
  };

  return (
    <>
      <IconButton onClick={() => handleEdit(params)}>
        <CreateIcon color="primary.contrastText" />
      </IconButton>
      <IconButton onClick={() => handleDelete(params)}>
        <DeleteIcon color="error.contrastText" />
      </IconButton>
    </>
  );
}

TooltipButtons.propTypes = {
  i: PropTypes.number,
  year: PropTypes.number,
  timelineData: PropTypes.array,
  handleEdit: PropTypes.func,
}.isRequired;

export default TooltipButtons;
