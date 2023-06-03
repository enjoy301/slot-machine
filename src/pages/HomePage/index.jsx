/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  HomePageLayout,
  Title,
  LoadingContainer,
} from "./HomePage.styles";
import Button from "../../components/Button";
import Background from "../../components/Background";
import Slot from "../../components/Slot";
import Result from "../../components/Result";
import {
  useGetObjectsMutation,
  useGetStyleMutation,
} from "../../apis/notionAPI";
import { setConfig } from "../../redux/configSlice";
import { setArray } from "../../redux/objectSlice";

export default function HomePage() {
  const [renderState, setRenderState] = useState("loading");

  const [getData, { data, isError, isSuccess }] = useGetStyleMutation();
  const [
    getObject,
    { data: objectData, isError: isObjectError, isSuccess: isObjectSuccess },
  ] = useGetObjectsMutation();

  const dispatch = useDispatch();
  const config = useSelector((state) => state.config.config);

  useEffect(() => {
    getData();
    getObject();
  }, []);

  useEffect(() => {
    if (isSuccess && isObjectSuccess) {
      dispatch(setConfig(data));
      dispatch(setArray(objectData));

      setRenderState("success");
    }

    if ((isError || isObjectError) && renderState !== "failed") {
      dispatch(setConfig());
      dispatch(setArray());

      setRenderState("failed");
    }
  }, [isSuccess, isObjectSuccess, isError, isObjectError]);

  useEffect(() => {
    document.title = config.siteTitle;

    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = config.favicon;
  }, [renderState]);

  const render = () => {
    if (renderState === "loading")
      return <LoadingContainer>Loading...</LoadingContainer>;
    return (
      <HomePageLayout>
        <Background />
        <Container>
          <Title color={config.titleTextColor} font={config.titleTextSize}>
            {config.title}
          </Title>
          <Slot />
          <Button />
          <Result />
        </Container>
      </HomePageLayout>
    );
  };

  return render();
}
