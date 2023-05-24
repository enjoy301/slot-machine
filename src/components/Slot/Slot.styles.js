import { styled } from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  align-items: center;
  overflow: hidden;
`;

export const LeftArrow = styled.div`
  flex: 1;
  display: flex;
  justify-content: right;
  align-self: center;
`;

export const RightArrow = styled.div`
  flex: 1;
  display: flex;
  justify-content: left;
  align-self: center;
`;

export const Pointer = styled.div`
  width: 150px;
  height: 100px;
  border: 2px solid #ffd976 !important;
  border-radius: 10px !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
