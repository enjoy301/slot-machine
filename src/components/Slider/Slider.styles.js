import { styled } from "styled-components";

export const Container = styled.div.attrs((props) => ({
  style: {
    marginTop: `${props.margin}px`,
  },
}))`
  flex: 0 ${(props) => props.width};
  display: flex;
  flex-direction: column;
`;

export const Emoji = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(${(props) => props.size} * 0.7);
  line-height: ${(props) => props.size};
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  /* width: ${(props) => props.size}; */
  height: ${(props) => props.size};
`;
