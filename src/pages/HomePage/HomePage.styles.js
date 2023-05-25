import { styled } from "styled-components";

export const HomePageLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const Container = styled.div`
  width: 500px;
  height: 700px;
  background-color: white;
  border-radius: 45px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.h1`
  color: #6a6a6a;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
