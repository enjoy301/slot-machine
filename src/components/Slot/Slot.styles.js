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
  border-left: calc(20px * ${(props) => props.size}) solid
    ${(props) => props.color};
  border-top: calc(10px * ${(props) => props.size}) solid transparent;
  border-bottom: calc(10px * ${(props) => props.size}) solid transparent;
  padding-right: calc(10px * ${(props) => props.size});
`;

export const RightArrowContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-self: center;
`;

export const RightArrow = styled.div`
  border-right: calc(20px * ${(props) => props.size}) solid
    ${(props) => props.color};
  border-top: calc(10px * ${(props) => props.size}) solid transparent;
  border-bottom: calc(10px * ${(props) => props.size}) solid transparent;
  padding-left: calc(10px * ${(props) => props.size});
`;

export const Pointer = styled.div`
  width: calc(${(props) => props.width} * 0.9);
  height: calc(${(props) => props.height} * 0.9);
  border: calc(2px * ${(props) => props.size}) solid ${(props) => props.color} !important;
  border-radius: 10px !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
