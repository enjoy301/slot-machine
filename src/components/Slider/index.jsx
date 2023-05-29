import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CONFIG from "../../site.config";
import { Container, Emoji, Image, ImageContainer } from "./Slider.styles";
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
  const [objectArray, setObjectArray] = useState(CONFIG.objectArray);

  const objectRef = useRef(null);
  const objectOriginLength = useRef(CONFIG.objectArray.length);

  const dispatch = useDispatch();
  const isIdle = useSelector((state) => state.slot.isIdle);
  const isStopping = useSelector((state) => state.slot.isStopping);

  useEffect(() => {
    objectArray.unshift(objectArray[objectArray.length - 1]);
    objectArray.push(objectArray[1]);
    objectArray.push(objectArray[2]);

    if (objectArray.length % 2 === 0) {
      objectArray.push(objectArray[3]);
    }

    setObjectArray(objectArray);
  }, []);

  useEffect(() => {
    const { clientHeight } = objectRef.current;
    const len = objectArray.length;

    setItemHeight(clientHeight * 2);
    setFrom(clientHeight * (len - 3));

    if (objectOriginLength.current % 2 === 0) {
      setTo(-clientHeight * (len - 3));
    } else {
      setTo(-clientHeight * (len - 5));
    }
  }, [objectArray]);

  const handleStopPoint = () => {
    let point = Math.ceil(margin / itemHeight) * itemHeight;
    let random = Math.floor(Math.random() * 3);

    while (random > 0) {
      point += itemHeight;

      if (point > from) {
        point -= itemHeight * objectOriginLength.current;
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
              objectArray[
                Math.floor(-stopPoint / itemHeight) +
                  (objectArray.length - 1) / 2
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

  const renderObject = () => {
    return objectArray.map((object, index) => {
      if (index === 1) {
        if (object.isEmoji) {
          return (
            <Emoji ref={objectRef} key={index}>
              {object.object}
            </Emoji>
          );
        }
        return (
          <ImageContainer ref={objectRef}>
            <Image key={index} src={object.object} />
          </ImageContainer>
        );
      }
      if (object.isEmoji) {
        return <Emoji key={index}>{object.object}</Emoji>;
      }
      return (
        <ImageContainer key={index}>
          <Image src={object.object} />
        </ImageContainer>
      );
    });
  };

  return <Container margin={margin}>{renderObject()}</Container>;
}
