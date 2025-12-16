import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath: "authapi",
    // baseQuery: fetchBaseQuery({ baseUrl: "https://mailsender-backend-tdtb.onrender.com/api" }),
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5500/api" }),
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


