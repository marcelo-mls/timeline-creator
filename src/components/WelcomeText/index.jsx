import React from 'react';

import { Container, Image, EnhancedText } from './style';
import upArrow from '../../images/up.svg';

function WelcomeText() {
  return (
    <Container>
      <Image src={upArrow} alt="An arrow pointing upwards" />
      <div>
        <p>use the</p>
        <p>inputs above</p>
        <p>to create your</p>
        <EnhancedText>Timeline...</EnhancedText>
      </div>
    </Container>
  );
}

export default WelcomeText;
