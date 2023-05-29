import { styled } from "styled-components";
import CONFIG from "../../site.config";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${CONFIG.backgroundColor};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Line = styled.div`
  flex: 1;
`;
