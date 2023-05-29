import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CONFIG from "../../site.config";
import { Container, Emoji } from "./Slider.styles";
import { reverseStopping, addResult } from "../../redux/slotSlice";
import useInterval from "../../hooks/useInterval";

const INITIAL_SPEED = 10;
const INITIAL_STOP_POINT = 987654321;

export default function Slider() {
  const [margin, setMargin] = useState(0);
  const [itemHeight, setItemHeight] = useState(0);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [speed, setSpeed] = useState(INITIAL_SPEED);
  const [beforeSpeed, setBeforeSpeed] = useState(INITIAL_SPEED);
  const [stopPoint, setStopPoint] = useState(INITIAL_STOP_POINT);
  const [emojiArray, setEmojiArray] = useState(CONFIG.emojiArray);

  const emojiRef = useRef(null);
  const emojiOriginLength = useRef(CONFIG.emojiArray.length);

  const dispatch = useDispatch();
  const isIdle = useSelector((state) => state.slot.isIdle);
  const isStopping = useSelector((state) => state.slot.isStopping);

  useEffect(() => {
    emojiArray.unshift(emojiArray[emojiArray.length - 1]);
    emojiArray.push(emojiArray[1]);
    emojiArray.push(emojiArray[2]);

    if (emojiArray.length % 2 === 0) {
      emojiArray.push(emojiArray[3]);
    }

    setEmojiArray(emojiArray);
  }, []);

  useEffect(() => {
    const { clientHeight } = emojiRef.current;
    const len = emojiArray.length;

    setItemHeight(clientHeight * 2);
    setFrom(clientHeight * (len - 3));

    if (emojiOriginLength.current % 2 === 0) {
      setTo(-clientHeight * (len - 3));
    } else {
      setTo(-clientHeight * (len - 5));
    }
  }, [emojiArray]);

  const handleStopPoint = () => {
    let point = Math.ceil(margin / itemHeight) * itemHeight;
    let random = Math.floor(Math.random() * 3);

    while (random > 0) {
      point += itemHeight;

      if (point > from) {
        point -= itemHeight * emojiOriginLength.current;
      }

      random -= 1;
    }

    setStopPoint(point);
  };

  useInterval(
    () => {
      if (isStopping) {
        setBeforeSpeed(speed);

        // 속도 조절
        if (speed > 10) {
          setSpeed(speed - 0.2);
        } else if (speed > 5) {
          setSpeed(speed - 0.15);
        } else if (speed > 0) {
          setSpeed(speed - 0.05);
        } else if (speed > -3) {
          setSpeed(speed - 0.02);
        }

        // 뒤로 굴러가기 직전 stopPoint 설정
        if (speed < 0 && beforeSpeed >= 0) {
          handleStopPoint();
        }
        // 멈추기
        if (Math.abs(margin - stopPoint) < 4) {
          dispatch(
            addResult(
              emojiArray[
                Math.floor(-stopPoint / itemHeight) +
                  (emojiArray.length - 1) / 2
              ],
            ),
          );
          dispatch(reverseStopping());
          setSpeed(INITIAL_SPEED);
          setStopPoint(987654321);
        }
      }

      setMargin(margin - speed);
      if (margin < to) {
        setMargin(from);
      } else if (margin > from) {
        setMargin(to);
      }
    },
    isIdle || isStopping ? 5 : null,
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
