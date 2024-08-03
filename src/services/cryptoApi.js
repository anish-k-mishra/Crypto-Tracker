import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '0fa6e6b421msh110851df8340dcfp174662jsn01bc771dc4a4',
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/exchanges';

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos: builder.query({
            query: ()=>createRequest('/coins')
        })
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi; 
