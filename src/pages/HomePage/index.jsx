import React, { useEffect } from "react";
import { Container, HomePageLayout, Title } from "./HomePage.styles";
import Button from "../../components/Button";
import Background from "../../components/Background";
import Slot from "../../components/Slot";
import Result from "../../components/Result";
import CONFIG from "../../site.config";

export default function HomePage() {
  useEffect(() => {
    document.title = CONFIG.title.text;

    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = CONFIG.site.favicon;
  }, []);

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
