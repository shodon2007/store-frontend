export type TypeAuthError = {
    status: string,
    message: string,
}

export type TypeAuthReturn = {
    status: string,
    token: string,
    message: string,
    user: string,
} | TypeAuthError;

export type TypeAuthResponse = {
    message: string;
    token: string;
    user: string;
}

export type TypeAuthFunction = (login: string, passwrod: string) =>
    Promise<TypeAuthReturn>;