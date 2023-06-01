import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const styleBody = {
  filter: {
    and: [
      {
        property: "property",
        rich_text: {
          is_not_empty: true,
        },
      },
      {
        property: "value",
        rich_text: {
          is_not_empty: true,
        },
      },
    ],
  },
};

const objectBody = {
  filter: {
    and: [
      {
        property: "object",
        rich_text: {
          is_not_empty: true,
        },
      },
      {
        property: "text",
        title: {
          is_not_empty: true,
        },
      },
      {
        property: "type",
        select: {
          is_not_empty: true,
        },
      },
    ],
  },
};

export const notionAPI = createApi({
  reducerPath: "notionAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cors-anywhere.herokuapp.com/https://api.notion.com/v1/",
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => ({
    getStyle: builder.mutation({
      query: () => ({
        url: `databases/${process.env.REACT_APP_STYLE_DB}/query`,
        method: "POST",
        body: styleBody,
      }),
      transformResponse: (response) => {
        const config = {};

        response.results.forEach(function iter(item) {
          config[item.properties.property.title[0].plain_text] =
            item.properties.value.rich_text[0].plain_text;
        });

        return config;
      },
    }),
    getObjects: builder.mutation({
      query: () => ({
        url: `databases/${process.env.REACT_APP_OBJECT_DB}/query`,
        method: "POST",
        body: objectBody,
      }),
      transformResponse: (response) => {
        const objects = [];

        response.results.forEach(function iter(item) {
          objects.push({
            object: item.properties.object.rich_text[0].plain_text,
            name: item.properties.text.title[0].plain_text,
            type: item.properties.type.select.name,
          });
        });

        return objects;
      },
    }),
  }),
});

export const { useGetStyleMutation, useGetObjectsMutation } = notionAPI;
