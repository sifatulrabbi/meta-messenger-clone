import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Header, Footer } from "../features";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </RecoilRoot>
    );
}

export default MyApp;
