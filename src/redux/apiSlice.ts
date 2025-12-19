import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const API = import.meta.env.VITE_API_URL
export const apiSlice = createApi({
    reducerPath: "authapi",
    baseQuery: fetchBaseQuery({ baseUrl: API, credentials: "include", }),
    tagTypes: ["Auth"],
    endpoints: (e) => ({
        register: e.mutation({
            query: (body) => ({ url: "api/auth/register", method: "POST", body }),
        }),
        login: e.mutation({
            query: (body) => ({ url: "api/auth/login", method: "POST", body }), invalidatesTags: ["Auth"]
        }),
        logout: e.mutation<{ status: boolean; message: string }, void>({
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

    })

})
export interface GetUserResponse {
    status: boolean;
    message: string;
    userDetails: string;
}

export const { useRegisterMutation, useLoginMutation, useLogoutMutation, useCheckGoogleQuery, useGetUserQuery } = apiSlice






