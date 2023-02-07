import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button, TextField } from '@mui/material';
import { toast } from 'react-toastify';
import emptyPhoto from '../../images/paper.svg';

import { Container, FormContainer } from './style';

function HeaderForm(props) {
  const { timelineData, setTimelineData } = props;

  const [year, setYear] = useState('');
  const [event, setEvent] = useState('');
  const [image, setImage] = useState('');
  const [disableBtn, setDisableBtn] = useState(true);

  const handleAddClick = () => {
    const imageTreatment = image || emptyPhoto;
    const newTimeLine = [...timelineData, { year, event, image: imageTreatment }].sort((a, b) => {
      if (a.year < b.year) return -1;
      if (a.year > b.year) return 1;
      return 0;
    });

    localStorage.setItem('timeLineData', JSON.stringify(newTimeLine));

    toast.success(`Event from ${year} successfully added!`);

    setTimelineData(newTimeLine);
    setYear('');
    setEvent('');
    setImage('');
  };

  const handleDeleteClick = () => {
    localStorage.setItem('timeLineData', JSON.stringify([]));
    setTimelineData([]);
    toast.success('Your timeline is ready!');
  };

  const handleDisableBtn = () => year.length > 0 && event.length > 0;

  useEffect(() => {
    setDisableBtn(!handleDisableBtn());
  }, [year, event]);

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
          value={event}
          onChange={(e) => setEvent(e.target.value)}
        />
        <TextField
          type="text"
          label="Image URL"
          variant="outlined"
          size="small"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Button
          type="button"
          variant="contained"
          onClick={handleAddClick}
          disabled={disableBtn}
          startIcon={<AddCircleIcon />}
        >
          Add to timeline
        </Button>
      </FormContainer>

      <Button
        type="button"
        variant="contained"
        color="error"
        onClick={handleDeleteClick}
        disabled={timelineData.length === 0}
        startIcon={<DeleteForeverIcon />}
      >
        Remove all
      </Button>
    </Container>
  );
}

HeaderForm.propTypes = {
  setTimelineData: PropTypes.func,
  timelineData: PropTypes.array,
}.isRequired;

export default HeaderForm;
