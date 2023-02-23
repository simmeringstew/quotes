import SavedQuote from "./SavedQuote";

const Saved = ({ saved, removeQuote }) => {
    if (saved.length === 0) {
        return(
            <h1>Looks like you have no saved quotes...</h1>
        );
    }
    return (
        <main className="container">
            {saved.map(quote =>
            <SavedQuote key={quote._id} quote={quote} removeQuote={removeQuote} />
            )}
        </main>
    );
}

export default Saved;
