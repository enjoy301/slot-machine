import React from "react";
import { Container, RoundButton } from "./Button.styles";

export default function Button() {
  const handleClick = () => {
    console.log("onClick");
  };

  return (
    <Container>
      <RoundButton onClick={handleClick}>돌려!</RoundButton>
    </Container>
  );
}
