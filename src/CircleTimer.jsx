import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const CircleTimer = () => (
  <CountdownCircleTimer
    isPlaying
    duration={20}
    colors={[
      ['#004777', 0.33],
      ['#F7B801', 0.33],
      ['#A30000', 0.33],
    ]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
)

export default CircleTimer;