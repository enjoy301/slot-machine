import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, RoundButton } from "./Button.styles";
import { reverseIdle, reverseStopping } from "../../redux/slotSlice";

export default function Button() {
  const dispatch = useDispatch();
  const isIdle = useSelector((state) => state.slot.slotState.isIdle);
  const isStopping = useSelector((state) => state.slot.slotState.isStopping);

  const handleClick = () => {
    if (isStopping) return;

    if (isIdle) {
      dispatch(reverseIdle());
      dispatch(reverseStopping());
    } else {
      dispatch(reverseIdle());
    }
  };

  return (
    <Container>
      <RoundButton onClick={handleClick}>
        {isIdle ? "멈춰!" : "돌려!"}
      </RoundButton>
    </Container>
  );
}
