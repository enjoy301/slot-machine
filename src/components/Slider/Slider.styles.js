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

export const Imoji = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 70px;
`;
