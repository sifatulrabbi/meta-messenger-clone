import { selector } from "recoil";
import { authState } from "../atoms";

export const authStatusSelector = selector({
    key: "auth_status_selector",
    get: ({ get }) => {
        const status = get(authState).isAuthenticated;
        return status;
    },
});
