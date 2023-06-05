import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Emoji, Image, ImageContainer } from "./Slider.styles";
import { reverseStopping, addResult } from "../../redux/slotSlice";
import useInterval from "../../hooks/useInterval";

const INITIAL_STOP_POINT = 987654321;

export default function Slider() {
  const config = useSelector((state) => state.config.config);

  const [margin, setMargin] = useState(0);
  const [itemHeight, setItemHeight] = useState(0);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [speed, setSpeed] = useState(config.speed);
  const [beforeSpeed, setBeforeSpeed] = useState(config.speed);
  const [stopPoint, setStopPoint] = useState(INITIAL_STOP_POINT);

  const dispatch = useDispatch();
  const isIdle = useSelector((state) => state.slot.isIdle);
  const isStopping = useSelector((state) => state.slot.isStopping);

  const objectArray = useSelector((state) => state.object.objectArray);
  const objectOriginLength = useSelector((state) => state.object.originLength);
  const objectRef = useRef(null);

  useEffect(() => {
    const { clientHeight } = objectRef.current;
    const len = objectArray.length;

    setItemHeight(clientHeight * 2);
    setFrom(clientHeight * (len - 3));

    if (objectOriginLength % 2 === 0) {
      setTo(-clientHeight * (len - 3));
    } else {
      setTo(-clientHeight * (len - 5));
    }
  }, []);

  const handleStopPoint = () => {
    let point = Math.ceil(margin / itemHeight) * itemHeight;
    let random = Math.floor(Math.random() * 3);

    while (random > 0) {
      point += itemHeight;

      if (point > from) {
        point -= itemHeight * objectOriginLength;
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
          setSpeed(speed - 0.1);
        } else if (speed > 5) {
          setSpeed(speed - 0.1);
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
          setSpeed(config.speed);
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
        if (object.type === "emoji") {
          return (
            <Emoji ref={objectRef} key={index} size={config.itemHeight}>
              {object.object}
            </Emoji>
          );
        }
        return (
          <ImageContainer ref={objectRef} key={index}>
            <Image src={object.object} size={config.itemHeight} />
          </ImageContainer>
        );
      }
      if (object.type === "emoji") {
        return (
          <Emoji key={index} size={config.itemHeight}>
            {object.object}
          </Emoji>
        );
      }
      return (
        <ImageContainer key={index}>
          <Image src={object.object} size={config.itemHeight} />
        </ImageContainer>
      );
    });
  };

  return (
    <Container margin={margin} width={config.itemWidth}>
      {renderObject()}
    </Container>
  );
}
