import React from "react";
import { Container, Imoji, ImojiContainer, ImojiText } from "./Result.styles";

export default function Result() {
  return (
    <Container>
      <ImojiContainer>
        <Imoji>😇</Imoji>
      </ImojiContainer>
      <ImojiText>냥냥</ImojiText>
    </Container>
  );
}
