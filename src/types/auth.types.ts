//auth.types.ts

export type LoginCredentials = {
    username: string;
    password: string;
};

export type loginResponse = {
    token: string;
    username: string;
};