import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, RoundButton } from "./Button.styles";
import { reverseIdle, reverseStopping } from "../../redux/slotSlice";

export default function Button() {
  const dispatch = useDispatch();
  const isIdle = useSelector((state) => state.slot.isIdle);
  const isStopping = useSelector((state) => state.slot.isStopping);
  const config = useSelector((state) => state.config.config);

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
    if (isStopping) return config.stoppingText;
    if (isIdle) return config.stopText;
    return config.spinText;
  };

  return (
    <Container>
      <RoundButton
        onClick={handleClick}
        animation={isStopping ? "stop" : "play"}
        color={config.buttonTextColor}
        backgroundcolor={config.buttonColor}
      >
        {buttonText()}
      </RoundButton>
    </Container>
  );
}
