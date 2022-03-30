import type { NextPage, NextPageContext } from "next";
import { ActiveUsersSection, Head } from "../features";
import { SearchScreen } from "../features/SearchScreen";

interface Props {
    message: string;
}

const Home: NextPage<Props> = ({}) => {
    return (
        <div className="p-4 mt-[66px]">
            <Head title={"Home"} />
            <SearchScreen />
            <ActiveUsersSection />
        </div>
    );
};

export async function getStaticProps(ctx: NextPageContext) {
    return {
        props: { message: "Next.js TailwindCSS starter template" },
    };
}

export default Home;
