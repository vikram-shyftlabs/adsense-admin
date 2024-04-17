import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const campaignApi = createApi({
  reducerPath: "campaignApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/pokemon",
    prepareHeaders: (headers, { getState }) => {
      // Add any common headers here if needed
      const token = getState().accountLink.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllPokemon: builder.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
    }),
    createCampaign: builder.mutation({
      query: (data) => ({
        url: "/createCampaign",
        method: "POST",
        body: data,
      }),
    }),
    getCampaign: builder.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
    }),
    searchCampaign: builder.mutation({
      query: (data) => ({
        url: "/searchCampaign",
        method: "POST",
        body: data,
      }),
    }),

  }),
});

export const { useGetAllPokemonQuery, useCreateCampaignMutation ,useGetCampaignQuery,useSearchCampaignMutation} = campaignApi;
