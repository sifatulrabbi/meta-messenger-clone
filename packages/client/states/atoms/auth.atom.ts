import { atom } from "recoil";
import { IAuthState } from "../../interfaces";

export const authState = atom<IAuthState>({
    key: "auth_state",
    default: {
        isAuthenticated: false,
        user: null,
        token: null,
    },
});
