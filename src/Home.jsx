import WordOfTheDay from "./WordOfTheDay.jsx";
import RecentPosts from "./RecentPosts.jsx";

function Home() {
    return (
        <>
            <div style={{ padding: 20 }}>
                <h2>Sanibonani!</h2>

                <p>
                    Welcome to Let&#39;s Learn isiZulu, a site dedicated to the learning of the isiZulu language, and
                    the Zulu Culture.
                </p>

                    <WordOfTheDay />
                    <RecentPosts />
            </div>
        </>
    );
}

export default Home;
