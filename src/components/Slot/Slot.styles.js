import { styled } from "styled-components";

export const Container = styled.div`
  flex: 1.2;
  display: flex;
  position: relative;
  align-items: center;
  overflow: hidden;
`;

export const LeftArrowContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-self: center;
`;

export const LeftArrow = styled.div`
  border-left: 20px solid #ffd976;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
`;

export const RightArrowContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-self: center;
`;

export const RightArrow = styled.div`
  border-right: 20px solid #ffd976;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
`;

export const Pointer = styled.div`
  width: 150px;
  height: 90px;
  border: 2px solid #ffd976 !important;
  border-radius: 10px !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
