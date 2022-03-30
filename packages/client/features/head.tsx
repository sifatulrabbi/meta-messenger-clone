import React from "react";
import {default as NextHead} from "next/head";

interface Props {
    title: string;
}

export const Head: React.FC<Props> = ({title}) => {
    return (
        <NextHead>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>{title} | Next.js starter template</title>
        </NextHead>
    );
};
