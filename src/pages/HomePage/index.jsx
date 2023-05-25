import React from "react";
import { Container, HomePageLayout, Title } from "./HomePage.styles";
import Button from "../../components/Button";
import Background from "../../components/Background";
import Slot from "../../components/Slot";
import Result from "../../components/Result";

export default function HomePage() {
  return (
    <HomePageLayout>
      <Background />
      <Container>
        <Title>오늘 점심 메뉴는?</Title>
        <Slot />
        <Button />
        <Result />
      </Container>
    </HomePageLayout>
  );
}
