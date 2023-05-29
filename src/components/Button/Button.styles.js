import { styled, keyframes, css } from "styled-components";

export const Container = styled.div`
  flex: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const clicked = keyframes`
  from {
    transform: scale(1);
  }
  50% {
    transform: scale(0.92);
  }
  to {
    transform: scale(1);
  }
`;

export const RoundButton = styled.button`
  width: 215px;
  height: 50px;
  background-color: #ffb800;
  border: 0;
  border-radius: 100px;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  font-family: "IM_Hyemin-Bold";
  ${(props) => {
    if (props.animation === "play") {
      return css`
        &:active {
          animation: ${clicked} 0.2s 1 linear;
        }
      `;
    }
    return css`
      &:active {
        animation: none;
      }
    `;
  }}
`;
