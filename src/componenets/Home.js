import axios from "axios";
import { useState } from "react";
import Quote from "./Quote";
import "../styles/Home.css";

const Home = ({ addQuote }) => {

    const [quote, setQuote] = useState(undefined);

    const handleClick = () => {
        axios
          .get("https://api.quotable.io/random")
          .then(response => {
            setQuote(response.data);
          });
    }

    return(
        <main className="container">
        <Quote quote={quote} addQuote={addQuote} />
            <button type="button" className="generate-button" onClick={handleClick}>
                Generate
            </button>
        </main>
    );
}

export default Home;
