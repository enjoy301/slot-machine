import React from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Imoji,
  ImojiContainer,
  ImojiText,
  Partition,
  ResultContainer,
} from "./Result.styles";

export default function Result() {
  const result = useSelector((state) => state.slot.result);

  return (
    <ResultContainer>
      <Container>
        <ImojiContainer>
          <Imoji>{result[0]?.object}</Imoji>
        </ImojiContainer>
        <ImojiText>{result[0]?.name}</ImojiText>
      </Container>
      <Partition />
      <Container>
        <ImojiContainer>
          <Imoji>{result[1]?.object}</Imoji>
        </ImojiContainer>
        <ImojiText>{result[1]?.name}</ImojiText>
      </Container>
      <Partition />
      <Container>
        <ImojiContainer>
          <Imoji>{result[2]?.object}</Imoji>
        </ImojiContainer>
        <ImojiText>{result[2]?.name}</ImojiText>
      </Container>
    </ResultContainer>
  );
}
