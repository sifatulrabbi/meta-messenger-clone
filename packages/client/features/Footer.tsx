import Link from "next/link";
import React from "react";
import { FaTwitter, FaGithubAlt, FaFacebook } from "react-icons/fa";

export const Footer: React.FC = () => {
    return (
        <footer className="mx-container text-xs text-gray-700 flex flex-col justify-center items-center m-4 pt-4 border-t-[1px] border-gray-300">
            <span>Build with Next.js and TypeScript</span>
            <span>
                by{" "}
                <Link href="https://github.com/sifatulrabbi">
                    <a className="font-primary text-blue-500 font-bold">
                        @sifatulrabbi
                    </a>
                </Link>
            </span>
            <div className="flex gap-4 justify-center items-center mt-2 text-base">
                <Link href="https://twitter.com/sifatul_rabbi">
                    <a>
                        <FaGithubAlt />
                    </a>
                </Link>
                <Link href="https://twitter.com/sifatul_rabbi">
                    <a>
                        <FaTwitter />
                    </a>
                </Link>
                <Link href="https://twitter.com/sifatul_rabbi">
                    <a>
                        <FaFacebook />
                    </a>
                </Link>
            </div>
        </footer>
    );
};
