import { useState } from "react";
import "../styles/Home.css";

const Home = () => {

    const [quote, setQuote] = useState(undefined);

    return(
        <main className="container">
            <button type="button" className="generate-button">
                Generate
            </button>
        </main>
    );
}

export default Home;
