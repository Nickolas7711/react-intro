import React, { useState, useEffect } from 'react';

const Timer = ({ duration }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(duration);

  useEffect(() => {
    if (secondsRemaining > 0) {
      const intervalId = setInterval(() => {
        setSecondsRemaining((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [secondsRemaining]);

  return (
    <div className="timer">
      Время: {secondsRemaining} сек
    </div>
  );
};

export default Timer;
