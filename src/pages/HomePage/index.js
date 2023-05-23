import {
  Container,
  HomePageLayout,
  Result,
  SlotContainer,
  Title,
} from "./HomePage.styles";
import { Background } from "../../components/Background";
import { Button } from "../../components/Button";

export const HomePage = () => {
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
};
