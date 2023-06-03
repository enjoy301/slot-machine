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
  const config = useSelector((state) => state.config.config);

  const render = () => {
    const elements = [];
    let key = 0;

    for (let i = 0; i < 3; i += 1) {
      if (result[i].type === "image") {
        elements.push(
          <Container key={(key += 1)}>
            <ImageContainer
              color={config.resultColor}
              itemsize={config.itemSize}
            >
              <Image src={result[i].object} itemsize={config.itemSize} />
            </ImageContainer>
            <ImojiText
              color={config.resultTextColor}
              size={config.resultTextSize}
            >
              {result[i].name}
            </ImojiText>
          </Container>,
        );
      } else if (result[i].type === "emoji") {
        elements.push(
          <Container key={(key += 1)}>
            <EmojiContainer
              color={config.resultColor}
              itemsize={config.itemSize}
            >
              <Emoji itemsize={config.itemSize}>{result[i].object}</Emoji>
            </EmojiContainer>
            <ImojiText
              color={config.resultTextColor}
              size={config.resultTextSize}
            >
              {result[i].name}
            </ImojiText>
          </Container>,
        );
      } else {
        elements.push(
          <Container key={(key += 1)}>
            <EmojiContainer
              color={config.resultColor}
              itemsize={config.itemSize}
            >
              <Emoji />
            </EmojiContainer>
            <ImojiText
              color={config.resultTextColor}
              size={config.resultTextSize}
            >
              ㅤ
            </ImojiText>
          </Container>,
        );
      }

      if (i === 0 || i === 1) {
        elements.push(
          <Partition key={(key += 1)} color={config.partitionColor} />,
        );
      }
    }

    return <ResultContainer>{elements}</ResultContainer>;
  };

  return render();
}
