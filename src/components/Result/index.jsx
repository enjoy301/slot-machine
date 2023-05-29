import React from "react";
import { useSelector } from "react-redux";
import {
  Container,
  ImageContainer,
  Image,
  Emoji,
  EmojiContainer,
  ImojiText,
  Partition,
  ResultContainer,
} from "./Result.styles";

export default function Result() {
  const result = useSelector((state) => state.slot.result);

  return (
    <ResultContainer>
      <Container>
        {result[0].isEmoji ? (
          <EmojiContainer>
            <Emoji>{result[0]?.object}</Emoji>
          </EmojiContainer>
        ) : (
          <ImageContainer>
            <Image src={result[0].object} />
          </ImageContainer>
        )}
        <ImojiText>{result[0]?.name}</ImojiText>
      </Container>
      <Partition />
      <Container>
        {result[1].isEmoji ? (
          <EmojiContainer>
            <Emoji>{result[1]?.object}</Emoji>
          </EmojiContainer>
        ) : (
          <ImageContainer>
            <Image src={result[1].object} />
          </ImageContainer>
        )}
        <ImojiText>{result[1]?.name}</ImojiText>
      </Container>
      <Partition />
      <Container>
        {result[2].isEmoji ? (
          <EmojiContainer>
            <Emoji>{result[2]?.object}</Emoji>
          </EmojiContainer>
        ) : (
          <ImageContainer>
            <Image src={result[2].object} />
          </ImageContainer>
        )}
        <ImojiText>{result[2]?.name}</ImojiText>
      </Container>
    </ResultContainer>
  );
}
