import { IMessage } from "../../interfaces";

export const fakeMessages: IMessage[] = [
    {
        sender_id: "user_one",
        receiver_id: "user_two",
        body: "Hello",
    },
    {
        sender_id: "user_two",
        receiver_id: "user_one",
        body: "Hi. How are you?",
    },
    {
        sender_id: "user_one",
        receiver_id: "user_two",
        body: "Fine.\nCan you help me with learning JavaScript?",
    },
    {
        sender_id: "user_two",
        receiver_id: "user_one",
        body: "Yes, of course. Let's start tomorrow.",
    },
    {
        sender_id: "user_two",
        receiver_id: "user_one",
        body: "Are you ready to learn about JavaScript?",
    },
    {
        sender_id: "user_one",
        receiver_id: "user_two",
        body: "Yes, let's do it.",
    },
    {
        sender_id: "user_two",
        receiver_id: "user_one",
        body: "Okay, let me tell you the data types in JavaScript",
    },
    {
        sender_id: "user_two",
        receiver_id: "user_one",
        body: "null, boolean, integer/number, object, undefined, NaN",
    },
    {
        sender_id: "user_one",
        receiver_id: "user_two",
        body: "Wow! This is easy.",
    },
    {
        sender_id: "user_one",
        receiver_id: "user_two",
        body: "Tell me more!",
    },
];
