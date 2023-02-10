import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CreateIcon from '@mui/icons-material/Create';
import { Button, TextField } from '@mui/material';
import { toast } from 'react-toastify';

import emptyPhoto from '../../images/paper.svg';
import AppContext from '../../context/AppContext';
import { Container, FormContainer } from './style';

function HeaderForm() {
  const {
    year,
    setYear,
    historicalEvent,
    setHistoricalEvent,
    imageUrl,
    setImageUrl,
    timelineData,
    setTimelineData,
    isInEdit,
    setIsInEdit,
  } = useContext(AppContext);

  const [disableBtn, setDisableBtn] = useState(true);

  const insertEvent = (addOrEdit) => {
    const newTimeline = [...timelineData];
    const eventInInputs = { year, historicalEvent, imageUrl: imageUrl || emptyPhoto };

    if (addOrEdit.edit) {
      newTimeline[addOrEdit.index] = eventInInputs;
    } else {
      newTimeline.push(eventInInputs);
    }

    newTimeline.sort((a, b) => {
      if (a.year < b.year) return -1;
      if (a.year > b.year) return 1;
      return 0;
    });

    setTimelineData(newTimeline);
    setYear('');
    setImageUrl('');
    setHistoricalEvent('');
  };

  const handleAdd = () => {
    insertEvent(isInEdit);
    toast.success(`Event from ${year} successfully added!`);
  };

  const handleEdit = () => {
    insertEvent(isInEdit);
    toast.success(`Event from ${year} Edited!`);
    setIsInEdit({ edit: false, index: null });
  };

  const handleDelete = () => {
    setTimelineData([]);
    toast.success('Your timeline is ready!');
  };

  const handleDisableBtn = () => year.length > 0 && historicalEvent.length > 0;

  useEffect(() => {
    setDisableBtn(!handleDisableBtn());
  }, [year, historicalEvent]);

  return (
    <Container>
      <FormContainer>
        <TextField
          type="number"
          label="Year"
          variant="outlined"
          size="small"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <TextField
          type="text"
          label="Event"
          variant="outlined"
          size="small"
          value={historicalEvent}
          onChange={(e) => setHistoricalEvent(e.target.value)}
        />
        <TextField
          type="url"
          label="Image URL"
          variant="outlined"
          size="small"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <Button
          type="button"
          variant="contained"
          color={isInEdit.edit ? 'success' : 'primary'}
          onClick={isInEdit.edit ? handleEdit : handleAdd}
          disabled={disableBtn}
          startIcon={isInEdit.edit ? <CreateIcon /> : <AddCircleIcon />}
        >
          {isInEdit.edit ? 'Save Changes' : 'Add to timeline'}
        </Button>
      </FormContainer>

      {timelineData.length > 0 && (
      <Button
        type="button"
        variant="contained"
        color="error"
        onClick={handleDelete}
        startIcon={<DeleteForeverIcon />}
      >
        Remove all
      </Button>
      )}
    </Container>
  );
}

HeaderForm.propTypes = {
  setTimelineData: PropTypes.func,
  timelineData: PropTypes.array,
}.isRequired;

export default HeaderForm;
