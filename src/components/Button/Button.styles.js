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
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundcolor};
  border: 0;
  border-radius: 100px;
  color: ${(props) => props.color};
  cursor: pointer;
  font-size: ${(props) => props.size};
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

  @media (max-width: 650px) {
    width: 60%;
  }
`;
