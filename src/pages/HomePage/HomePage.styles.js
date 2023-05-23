import { styled } from "styled-components";

export const HomePageLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const Container = styled.div`
  width: 500px;
  height: 600px;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.h1`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const SlotContainer = styled.div`
  flex: 1;
`;

export const Result = styled.div`
  flex: 1;
`;
