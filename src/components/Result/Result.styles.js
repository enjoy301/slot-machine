import { styled } from "styled-components";
import CONFIG from "../../site.config";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EmojiContainer = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${CONFIG.result.backgroundColor};
  border-radius: 100%;
`;

export const Emoji = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 217, 118, 0.3);
  border-radius: 100%;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
`;

export const ImojiText = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${CONFIG.result.textColor};
  font-size: 20px;
  margin-top: 10px;
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
  border: 1px solid ${CONFIG.result.partitionColor};
`;
