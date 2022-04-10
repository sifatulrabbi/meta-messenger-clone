import React from "react";
import type { NextPage, NextPageContext } from "next";

interface Props {
    message: string;
}

const Home: NextPage<Props> = ({}) => {
    return (
        <>
            <div></div>
        </>
    );
};

export async function getStaticProps(ctx: NextPageContext) {
    return {
        props: { message: "Next.js TailwindCSS starter template" },
    };
}

export default Home;
