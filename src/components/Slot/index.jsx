import React from "react";
import { LeftArrow, RightArrow, Container, Pointer } from "./Slot.styles";
import Slider from "../Slider";

export default function Slot() {
  return (
    <Container>
      <LeftArrow>{"->"}</LeftArrow>
      <Slider />
      <RightArrow>{"<-"}</RightArrow>
      <Pointer />
    </Container>
  );
}
