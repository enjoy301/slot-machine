import React from "react";
import {
  LeftArrow,
  RightArrow,
  Container,
  Pointer,
  LeftArrowContainer,
  RightArrowContainer,
} from "./Slot.styles";
import Slider from "../Slider";

export default function Slot() {
  return (
    <Container>
      <LeftArrowContainer>
        <LeftArrow />
      </LeftArrowContainer>
      <Slider />
      <RightArrowContainer>
        <RightArrow />
      </RightArrowContainer>
      <Pointer />
    </Container>
  );
}
