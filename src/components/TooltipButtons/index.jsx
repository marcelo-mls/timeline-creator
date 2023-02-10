import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';

function TooltipButtons(props) {
  const {
    i, year, handleDelete, handleEdit,
  } = props;

  return (
    <>
      <IconButton onClick={() => handleEdit(i, year)}>
        <CreateIcon color="primary.contrastText" />
      </IconButton>
      <IconButton onClick={() => handleDelete(i, year)}>
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
