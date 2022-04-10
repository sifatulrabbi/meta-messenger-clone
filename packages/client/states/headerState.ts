import { atom } from "recoil";
import { IHeaderState } from "../interfaces";

export const headerState = atom<IHeaderState>({
    key: "header_state",
    default: {
        title: "TS Chat",
        avatar: null,
        returnHome: false,
        info: false,
    },
});
