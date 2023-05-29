import React from "react";
import { Container, HomePageLayout, Title } from "./HomePage.styles";
import Button from "../../components/Button";
import Background from "../../components/Background";
import Slot from "../../components/Slot";
import Result from "../../components/Result";
import CONFIG from "../../site.config";

export default function HomePage() {
  return (
    <HomePageLayout>
      <Background />
      <Container>
        <Title>{CONFIG.title.text}</Title>
        <Slot />
        <Button />
        <Result />
      </Container>
    </HomePageLayout>
  );
}
