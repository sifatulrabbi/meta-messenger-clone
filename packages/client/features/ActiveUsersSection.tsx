import React from "react";
import { ActiveUserBall } from "../components";
import { v4 } from "uuid";

export const ActiveUsersSection: React.FC = () => {
    return (
        <section className="overflow-x-scroll py-4 flex flex-row justify-start items-center gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(() => (
                <ActiveUserBall key={v4()} />
            ))}
        </section>
    );
};
