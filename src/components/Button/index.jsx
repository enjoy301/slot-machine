import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, RoundButton } from "./Button.styles";
import { reverseIdle, reverseStopping } from "../../redux/slotSlice";

export default function Button() {
  const dispatch = useDispatch();
  const isIdle = useSelector((state) => state.slot.isIdle);
  const isStopping = useSelector((state) => state.slot.isStopping);

  const handleClick = () => {
    if (isStopping) return;

    if (isIdle) {
      dispatch(reverseIdle());
      dispatch(reverseStopping());
    } else {
      dispatch(reverseIdle());
    }
  };

  const buttonText = () => {
    if (isStopping) return "두구두구";
    if (isIdle) return "멈춰!";
    return "돌려!";
  };

  return (
    <Container>
      <RoundButton
        onClick={handleClick}
        animation={isStopping ? "stop" : "play"}
      >
        {buttonText()}
      </RoundButton>
    </Container>
  );
}
