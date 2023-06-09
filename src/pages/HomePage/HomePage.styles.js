import { styled } from "styled-components";

export const HomePageLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const Container = styled.div`
  width: 60%;
  height: 80%;
  background-color: white;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 650px) {
    width: 90%;
    height: 95%;
    border-radius: 25px;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.color};
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0.8;
  font-size: ${(props) => props.font};
`;

export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;
