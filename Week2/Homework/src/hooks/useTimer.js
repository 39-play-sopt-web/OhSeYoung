import { useEffect, useRef, useState } from "react";

function useTimer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const startTimeRef = useRef(0); // 화면에 안 보이는 값이라 state 말고 ref

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setTime((Date.now() - startTimeRef.current) / 1000);
    }, 10);

    return () => clearInterval(intervalId); // 이거 안 하면 interval 계속 쌓임
  }, [isRunning]);

  function startTimer() {
    startTimeRef.current = Date.now();
    setTime(0);
    setIsRunning(true);
  }

  function stopTimer() {
    const playTime = (Date.now() - startTimeRef.current) / 1000;
    setTime(playTime);
    setIsRunning(false);
    return playTime;
  }

  function resetTimer() {
    setIsRunning(false);
    setTime(0);
  }

  return { time, startTimer, stopTimer, resetTimer };
}

export default useTimer;
