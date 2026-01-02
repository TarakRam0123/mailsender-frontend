import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Draft, GetDraftResponse, GetUserResponse, loginReq, loginResponse, response, SaveDraftPayload, sendMailRes, UserDetails } from "./interfaces"

const API = import.meta.env.VITE_API_URL
export const apiSlice = createApi({
    reducerPath: "authapi",
    baseQuery: fetchBaseQuery({ baseUrl: API, credentials: "include", }),
    tagTypes: ["Auth", "Draft", "GetMails"],
    endpoints: (e) => ({
        register: e.mutation({
            query: (body) => ({ url: "api/auth/register", method: "POST", body }),
        }),
        login: e.mutation<loginResponse, loginReq>({
            query: (body) => ({ url: "api/auth/login", method: "POST", body }), invalidatesTags: ["Auth"]
        }),
        logout: e.mutation<response, void>({
            query: () => ({ url: "api/auth/logout", method: "POST" }), invalidatesTags: ["Auth"]
        }),
        getUser: e.query<GetUserResponse, void>({
            query: () => ({ url: "api/auth/getUser", method: "GET" }), providesTags: ["Auth"],
        }),
        updateUser: e.mutation<response, UserDetails>({
            query: () => ({ url: "api/auth/updateUser", method: "POST" }),
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
        }),
        sendMail: e.mutation<sendMailRes, any>({
            query: (body) => ({ url: "/send/google", method: "POST", body }), invalidatesTags: ["GetMails"]
        }),
        getPreviousMails: e.query<any, void>({
            query: () => ({ url: "/mail/getprevious", method: "GET" }), providesTags: ["GetMails"]
        })


    })

})

export const { useRegisterMutation,
    useLoginMutation,
    useLogoutMutation,
    useCheckGoogleQuery,
    useGetUserQuery,
    useUpdateUserMutation,
    useGetDraftQuery,
    useSaveDraftMutation,
    useSendMailMutation,
    useGetPreviousMailsQuery } = apiSlice






