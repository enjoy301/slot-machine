import React from "react";
import { useSelector } from "react-redux";
import { Container, Line } from "./Background.styles";

export default function Background() {
  const config = useSelector((state) => state.config.config);

  return (
    <Container color={config.backgroundColor}>
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
    </Container>
  );
}
