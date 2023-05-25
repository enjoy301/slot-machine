import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CONFIG from "../../site.config";
import { Container, Emoji } from "./Slider.styles";
import { reverseStopping, addResult } from "../../redux/slotSlice";
import useInterval from "../../hooks/useInterval";

export default function Slider() {
  const [margin, setMargin] = useState(0);
  const [itemHeight, setItemHeight] = useState(0);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [speed, setSpeed] = useState(10);
  const [stopPoint, setStopPoint] = useState(987654321);

  const emojiRef = useRef(null);

  const dispatch = useDispatch();
  const isIdle = useSelector((state) => state.slot.isIdle);
  const isStopping = useSelector((state) => state.slot.isStopping);

  const { emojiArray } = CONFIG;

  useEffect(() => {
    setItemHeight(emojiRef.current.clientHeight * 2);
    setTo(-itemHeight * 4);
    setFrom(itemHeight * 4);
  });

  useInterval(
    () => {
      if (isStopping) {
        if (speed > 0) {
          setSpeed(speed - 0.1);
        } else {
          if (stopPoint === 987654321) {
            setStopPoint(Math.ceil(margin / itemHeight) * itemHeight);
            setSpeed(-0.9);
          }

          if (margin > stopPoint) {
            dispatch(
              addResult(emojiArray[Math.floor(-stopPoint / itemHeight) + 5]),
            );
            dispatch(reverseStopping());
            setSpeed(10);
            setStopPoint(987654321);
          }
        }
      }

      setMargin(margin - speed);
      if (margin <= to) {
        setMargin(from);
      }
    },
    isIdle || isStopping ? 10 : null,
  );

  const renderEmoji = () => {
    return emojiArray.map((emoji, index) =>
      index === 1 ? (
        <Emoji key={index}>{emoji.object}</Emoji>
      ) : (
        <Emoji ref={emojiRef} key={index}>
          {emoji.object}
        </Emoji>
      ),
    );
  };

  return <Container margin={margin}>{renderEmoji(emojiArray)}</Container>;
}
