export interface UserCredentials {
    email: string;
    password: string;
}

export interface RegisterData extends UserCredentials {
    username: string;
}

export interface User {
    uid: string;
    email: string;
    displayName: string | null;
}
