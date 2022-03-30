import React from "react";
import { useRecoilValue } from "recoil";
import { headerState } from "../states";
import { FaUser } from "react-icons/fa";

export const Header: React.FC = () => {
    const { title } = useRecoilValue(headerState);

    return (
        <header className="z-50 fixed top-0 right-0 left-0 bg-white shadow-md px-4 py-3 flex justify-between items-center">
            <div className="flex justify-start items-center gap-4">
                <div className="bg-gray-200 h-10 w-10 rounded-full flex justify-center items-center">
                    <FaUser className="text-2xl text-gray-400" />
                </div>
                <span className="font-bold text-lg">{title}</span>
            </div>
        </header>
    );
};
