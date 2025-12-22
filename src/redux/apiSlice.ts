import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Draft, GetDraftResponse, GetUserResponse, response, SaveDraftPayload } from "./interfaces"

const API = import.meta.env.VITE_API_URL
export const apiSlice = createApi({
    reducerPath: "authapi",
    baseQuery: fetchBaseQuery({ baseUrl: API, credentials: "include", }),
    tagTypes: ["Auth", "Draft"],
    endpoints: (e) => ({
        register: e.mutation({
            query: (body) => ({ url: "api/auth/register", method: "POST", body }),
        }),
        login: e.mutation({
            query: (body) => ({ url: "api/auth/login", method: "POST", body }), invalidatesTags: ["Auth"]
        }),
        logout: e.mutation<response, void>({
            query: () => ({ url: "api/auth/logout", method: "POST" }), invalidatesTags: ["Auth"]
        }),
        getUser: e.query<GetUserResponse, void>({
            query: () => ({ url: "api/auth/getUser", method: "GET" }), providesTags: ["Auth"],
        }),
        checkGoogle: e.query({
            query: () => ({
                url: "me/google",
                method: "GET",
            }),
        }),
        getDraft: e.query<GetDraftResponse | null, void>({
            query: () => ({ url: "mail/getDraft", method: "GET" }), providesTags: ["Draft"]
        }),
        saveDraft: e.mutation<response, SaveDraftPayload>({
            query: (body) => ({ url: "mail/saveDraft", method: "POST", body }), invalidatesTags: ["Draft"]
        })

    })

})

export const { useRegisterMutation,
    useLoginMutation,
    useLogoutMutation,
    useCheckGoogleQuery,
    useGetUserQuery,
    useGetDraftQuery,
    useSaveDraftMutation } = apiSlice






