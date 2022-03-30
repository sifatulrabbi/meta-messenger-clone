import { atom } from "recoil";

export const headerState = atom({
    key: "header_state",
    default: {
        title: "TS Chat",
    },
});
