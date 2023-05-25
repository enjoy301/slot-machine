import { styled } from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImojiContainer = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 217, 118, 0.3);
  border-radius: 100%;
`;

export const Imoji = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;

export const ImojiText = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffb800;
  font-size: 20px;
`;

export const ResultContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Partition = styled.div`
  width: 0px;
  height: 90%;
  border: 1px solid #ffb800;
`;
