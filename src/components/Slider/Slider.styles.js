import { styled } from "styled-components";

export const Container = styled.div.attrs((props) => ({
  style: {
    marginTop: `${props.margin}px`,
  },
}))`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Emoji = styled.div`
  /* height: 92px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 70px;
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 92px;
  height: 92px;
`;
