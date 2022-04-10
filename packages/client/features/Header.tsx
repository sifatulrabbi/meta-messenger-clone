import React from "react";
import { useRecoilValue } from "recoil";
import { headerState } from "../states";
import { FaChevronLeft, FaInfoCircle, FaUser } from "react-icons/fa";
import Link from "next/link";

export const Header: React.FC = () => {
    const { title, returnHome, info, avatar } = useRecoilValue(headerState);

    return (
        <header className="z-50 fixed top-0 right-0 left-0 bg-white shadow-sm px-4 lg:px-[18vw] h-[60px] flex justify-between items-center">
            <div className="w-full flex justify-start items-center gap-4">
                {returnHome && (
                    <Link href="/">
                        <a>
                            <FaChevronLeft />
                        </a>
                    </Link>
                )}
                {avatar && (
                    <div className="bg-gray-200 h-10 w-10 rounded-full flex justify-center items-center">
                        <FaUser className="text-2xl text-gray-400" />
                    </div>
                )}
                <span className="font-bold font-primary">{title}</span>
                {info && (
                    <button
                        className="text-gray-500 text-lg"
                        style={{ marginLeft: "auto" }}
                    >
                        <FaInfoCircle />
                    </button>
                )}
            </div>
        </header>
    );
};
