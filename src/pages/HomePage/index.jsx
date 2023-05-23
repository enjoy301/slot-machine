import React from "react";
import {
  Container,
  HomePageLayout,
  Result,
  SlotContainer,
  Title,
} from "./HomePage.styles";
import Button from "../../components/Button";
import Background from "../../components/Background";

export default function HomePage() {
  return (
    <HomePageLayout>
      <Background />
      <Container>
        <Title>안녕</Title>
        <SlotContainer />
        <Button />
        <Result />
      </Container>
    </HomePageLayout>
  );
}
