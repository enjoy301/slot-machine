import React from "react";
import { useSelector } from "react-redux";
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
  const config = useSelector((state) => state.config.config);

  return (
    <Container>
      <LeftArrowContainer>
        <LeftArrow color={config.slotColor} size={config.slotSize} />
      </LeftArrowContainer>
      <Slider />
      <RightArrowContainer>
        <RightArrow color={config.slotColor} size={config.slotSize} />
      </RightArrowContainer>
      <Pointer
        color={config.slotColor}
        size={config.slotSize}
        width={config.itemWidth}
        height={config.itemHeight}
      />
    </Container>
  );
}
