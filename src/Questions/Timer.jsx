/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";

const Timer = ({ dispatch, secondsRemaning }) => {
  const mins = Math.floor(secondsRemaning / 60);
  const sec = Math.floor(secondsRemaning % 60);

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(id); //for stop timer with
  }, [dispatch]);

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{sec < 10 && "0"}
      {sec}
    </div>
  );
};

export default Timer;
