import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setOpen } from "../../../../redux/contentSlice";

const EndMessage = () => {
  const [seconds, setSeconds] = useState(5);
  const naviagte = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (seconds === 0) {
      return;
    }

    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [seconds]);

  if (seconds === 0) {
    dispatch(setOpen(false));
    naviagte("/info");
  }

  return (
    <div>
      <div className="app">
        <div className="time">{seconds}s</div>
      </div>
    </div>
  );
};

export default EndMessage;
