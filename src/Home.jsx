function Home() {
    const apiUrl = import.meta.env.VITE_API_URL;
    console.log("API URL:", apiUrl);

    return(
        <>
            <div style={{padding: 20}}>
                <h2>Sanibonani!</h2>

                <p>
                    Welcome to Let&#39;s Learn isiZulu, a site dedicated to the learning of the isiZulu language, and
                    the
                    Zulu Culture.
                </p>
            </div>

        </>
    )
}

export default Home;