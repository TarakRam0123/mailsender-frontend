import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const API = import.meta.env.VITE_API_URL
export const apiSlice = createApi({
    reducerPath: "authapi",
    baseQuery: fetchBaseQuery({ baseUrl: API, credentials: "include", }),
    tagTypes: [],
    endpoints: (e) => ({
        register: e.mutation({
            query: (body) => ({ url: "api/auth/register", method: "POST", body })
        }),
        login: e.mutation({
            query: (body) => ({ url: "api/auth/login", method: "POST", body })
        }),
        logout: e.mutation({
            query: () => ({ url: "api/auth/logout", method: "POST" })
        }),
        getUser: e.query({
            query: () => ({ url: "api/auth/getUser", method: "GET" })
        }),
        checkGoogle: e.query({
            query: () => ({
                url: "me/google",
                method: "GET",
            }),
        }),

    })

})

export const { useRegisterMutation, useLoginMutation, useLogoutMutation, useCheckGoogleQuery ,useLazyGetUserQuery} = apiSlice


