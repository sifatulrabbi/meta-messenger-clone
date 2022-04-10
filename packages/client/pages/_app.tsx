import type { AppProps } from "next/app";
import "../styles/globals.css";
import { RecoilRoot } from "recoil";

const ProtectedRoutes: React.FC<{ children: any }> = ({ children }) => {
  return <>{children}</>;
};

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ProtectedRoutes>
        <Component {...pageProps} />
      </ProtectedRoutes>
    </RecoilRoot>
  );
}

export default App;
