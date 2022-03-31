export interface IUser {
    name: string;
    email: string;
}

export interface IAuthState {
    isAuthenticated: boolean;
    user: null | IUser;
    token: string | null;
}
