import React from "react";
import { FaUser } from "react-icons/fa";

export const ActiveUserBall: React.FC = () => {
    return (
        <div className="flex flex-col justify-start items-start">
            <div className="flex justify-center items-center bg-gray-100 h-[48px] min-h-[48px] w-[48px] min-w-[48px] rounded-full overflow-hidden">
                <FaUser className="text-3xl text-gray-300" />
            </div>
            <span className="text-xs text-center">Active Username</span>
        </div>
    );
};
