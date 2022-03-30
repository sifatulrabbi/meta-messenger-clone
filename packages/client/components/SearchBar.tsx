import React from "react";
import { FaSearch } from "react-icons/fa";

export const SearchBar: React.FC = () => {
    return (
        <form className="relative flex justify-center items-center w-full bg-gray-100 px-2 rounded-full">
            <input
                type="search"
                placeholder="Search"
                required
                className="w-full ml-6 p-2 bg-transparent outline-none"
            />
            <span className="text-base w-fit h-fit text-gray-400 absolute top-1/2 -translate-y-1/2 left-3 bottom-0 flex justify-center items-center">
                <FaSearch />
            </span>
        </form>
    );
};
