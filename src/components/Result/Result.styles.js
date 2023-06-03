import { styled } from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EmojiContainer = styled.div`
  display: flex;
  width: ${(props) => props.itemsize};
  height: ${(props) => props.itemsize};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  border-radius: 100%;
`;

export const Emoji = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(${(props) => props.itemsize} * 0.7);
  line-height: ${(props) => props.itemsize};
`;

export const ImageContainer = styled.div`
  display: flex;
  width: ${(props) => props.itemsize};
  height: ${(props) => props.itemsize};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  border-radius: 100%;
`;

export const Image = styled.img`
  /* width: calc(${(props) => props.itemsize} * 0.7); */
  height: calc(${(props) => props.itemsize} * 0.7);
`;

export const ImojiText = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  font-size: calc(${(props) => props.size} * 0.8);
  line-height: ${(props) => props.size};
  margin-top: calc(${(props) => props.size} * 0.4);
`;

export const ResultContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Partition = styled.div`
  width: 0px;
  height: 50%;
  border: 1px solid ${(props) => props.color};
`;
