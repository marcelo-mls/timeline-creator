import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button, TextField } from '@mui/material';
import { toast } from 'react-toastify';

import Container from './style';

function HeaderForm(props) {
  const { timelineData, setTimelineData } = props;

  const [year, setYear] = useState('');
  const [event, setEvent] = useState('');
  const [image, setImage] = useState('https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930');
  const [disableBtn, setDisableBtn] = useState(true);

  const handleClick = () => {
    const newTimeLine = [...timelineData, { year, event, image }].sort((a, b) => {
      if (a.year < b.year) return -1;
      if (a.year > b.year) return 1;
      return 0;
    });

    localStorage.setItem('timeLineData', JSON.stringify(newTimeLine));

    toast.success('Evento adicionado com sucesso!');

    setTimelineData(newTimeLine);
    setYear('');
    setEvent('');
    setImage('https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930');
  };

  const handleDisableBtn = () => year.length > 0 && event.length > 0;

  useEffect(() => {
    setDisableBtn(!handleDisableBtn());
  }, [year, event]);

  return (
    <Container>
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
        onClick={handleClick}
        disabled={disableBtn}
        startIcon={<AddCircleIcon />}
      >
        Add to timeline
      </Button>
    </Container>
  );
}

HeaderForm.propTypes = {
  setTimelineData: PropTypes.func,
  timelineData: PropTypes.array,
}.isRequired;

export default HeaderForm;
