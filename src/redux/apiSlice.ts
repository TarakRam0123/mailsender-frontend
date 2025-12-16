import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath: "authapi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.0.67:5500/api" }),
    tagTypes: [],
    endpoints: (e) => ({
        register: e.mutation({
            query: (body) => ({ url: "auth/register", method: "POST", body })
        }),
        login: e.mutation({
            query: (body) => ({ url: "auth/login", method: "POST", body })
        })
    })

})

export const { useRegisterMutation, useLoginMutation } = apiSlice


