import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Imoji } from "./Slider.styles";
import { reverseStopping } from "../../redux/slotSlice";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      // 만약 delay가 null이 아니라면
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }

    return () => {};
  }, [delay]);
}

export default function Slider() {
  const [margin, setMargin] = useState(0);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [speed, setSpeed] = useState(10);
  const emojiRef = useRef(null);

  const dispatch = useDispatch();
  const isIdle = useSelector((state) => state.slot.slotState.isIdle);
  const isStopping = useSelector((state) => state.slot.slotState.isStopping);

  useEffect(() => {
    setTo(-emojiRef.current.clientHeight * 8);
    setFrom(emojiRef.current.clientHeight * 8);
  });

  useInterval(
    () => {
      setMargin(margin - speed);
      if (isStopping) {
        setSpeed(speed - 0.1);

        if (speed <= 0) {
          dispatch(reverseStopping());
          setSpeed(10);
        }
      }

      if (margin <= to) {
        setMargin(from);
      }
    },
    isIdle || isStopping ? 10 : null,
  );

  return (
    <Container margin={margin}>
      <Imoji>🥶</Imoji>
      <Imoji ref={emojiRef}>🇰🇷</Imoji>
      <Imoji>🇸🇽</Imoji>
      <Imoji>😄</Imoji>
      <Imoji>😊</Imoji>
      <Imoji>😡</Imoji>
      <Imoji>😎</Imoji>
      <Imoji>🤬</Imoji>
      <Imoji>🥶</Imoji>
      <Imoji>🇰🇷</Imoji>
      <Imoji>🇸🇽</Imoji>
    </Container>
  );
}
