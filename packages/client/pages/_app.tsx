import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Header, Footer } from "../features";
import { RecoilRoot } from "recoil";

const ProtectedRoutes: React.FC<{ children: any }> = ({ children }) => {
    return <>{children}</>;
};

function App({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <Header />
            <ProtectedRoutes>
                <Component {...pageProps} />
            </ProtectedRoutes>
            <Footer />
        </RecoilRoot>
    );
}

export default App;
