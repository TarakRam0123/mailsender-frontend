export type loginResponse = {
    message: string,
    status: boolean,
    token: string
}
export type loginReq = {
    email: string,
    password: string
}
export type response = { status: boolean; message: string }
export interface GetUserResponse {
    status: boolean;
    message: string;
    userDetails: UserDetails;
}
export interface UserDetails {
    name: string | undefined;
    email: string | undefined;
    mobile: string | undefined,
    avatar: string | undefined,
    bio: string | undefined
}
export type Draft = {
    subject: string;
    body: string;
    attachments: string[];
};
export type GetDraftResponse = {
    status: boolean;
    message: string;
    draft: Draft | null;
};
export type SaveDraftPayload = {
    subject: string;
    body: string;
};
export type sendMailRes = {
    message: string,
    status: boolean
}
