import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, RoundButton } from "./Button.styles";
import { reverseIdle, reverseStopping } from "../../redux/slotSlice";
import CONFIG from "../../site.config";

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
    if (isStopping) return CONFIG.button.buttonText[2];
    if (isIdle) return CONFIG.button.buttonText[1];
    return CONFIG.button.buttonText[0];
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
