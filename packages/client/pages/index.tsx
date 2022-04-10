import type { NextPage, NextPageContext } from "next";
import {
    ActiveUsersSection,
    ConversationCard,
    Head,
    Footer,
} from "../features";
import { SearchScreen } from "../features/SearchScreen";
import { v4 } from "uuid";

interface Props {
    message: string;
}

const Home: NextPage<Props> = ({}) => {
    return (
        <>
            <Head title={"Home"} />
            <div className="mt-[80px] mx-container">
                <SearchScreen />
                <ActiveUsersSection />
                <section className="w-full flex flex-col justify-start items-start my-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                        <ConversationCard
                            key={v4()}
                            name={"Username"}
                            peek={
                                "Message that was sent previously. This is a example of a long message"
                            }
                            unread={item % 2 === 0}
                            timestamp={"09:30 am"}
                            active={item % 2 === 0}
                        />
                    ))}
                </section>
            </div>
            <Footer />
        </>
    );
};

export async function getStaticProps(ctx: NextPageContext) {
    return {
        props: { message: "Next.js TailwindCSS starter template" },
    };
}

export default Home;
