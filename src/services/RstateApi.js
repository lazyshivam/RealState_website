import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const RstateApiHeader = {
  "X-RapidAPI-Key": "39b48fd2demshe5b3441d3e8170dp17328ejsn434ac11a856c",
  "X-RapidAPI-Host": "bayut.p.rapidapi.com",
};
const baseUrl = "https://bayut.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: RstateApiHeader });
export const RstateApi = createApi({
  reducerPath: "RstateApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPropertiesForRent: builder.query({
      query: ({ roomsMin, bathsMin,areaMax,maxPrice }) =>
        createRequest(
          `properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=15&roomsMin=${roomsMin}&bathsMin=${bathsMin}&areaMax=${areaMax}&priceMax=${maxPrice}`
        ),
    }),
    getPropertiesForSale: builder.query({
      query: ({ roomsMin, bathsMin,areaMax,maxPrice }) =>
      createRequest(
        `properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=15&roomsMin=${roomsMin}&bathsMin=${bathsMin}&areaMax=${areaMax}&maxPrice=${maxPrice}`
      ),
    }),

    //  const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);
  }),
});

export const { useGetPropertiesForRentQuery, useGetPropertiesForSaleQuery } =
  RstateApi;
