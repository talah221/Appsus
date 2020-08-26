
export function LongTxt({ text, isLongTxtShown }) {
    // if (!isLongTxtShown) return;

    return <div>{isLongTxtShown &&
        <div >
            <p className="book-desc">{text}</p>
        </div>}</div>

}