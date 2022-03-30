import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Header } from "../features";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <Header />
            <Component {...pageProps} />
        </RecoilRoot>
    );
}

export default MyApp;
