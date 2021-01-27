import React, {useState, useCallback} from 'react';

export const Timer = ({
  targetTime
}) => {
  const [time, setTime] = useState('');
  const startTimer = useCallback((end) => {
    var timer  =  setInterval(() => {
      let timeLeft = end - new Date().getTime();
      let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      setTime(minutes + ':' + seconds);
      if (timeLeft <= 0) {
        clearInterval(timer);
      }
    }, 1000);
  }, []);
 
  startTimer(new Date().getTime(), new Date(targetTime).getTime());
  return (
      <span>{time}</span>
   
  )
}

export default Timer;