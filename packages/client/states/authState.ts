import { atom, selector } from "recoil";
import { IAuthState } from "../interfaces";

export const authState = atom<IAuthState>({
    key: "auth_state",
    default: {
        isAuthenticated: false,
        user: null,
        token: null,
    },
});

export const authStatusSelector = selector({
    key: "auth_status_selector",
    get: ({ get }) => {
        const status = get(authState).isAuthenticated;
        return status;
    },
});
