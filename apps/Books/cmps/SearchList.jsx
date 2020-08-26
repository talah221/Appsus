export function SearchList({ books,addBook }) {
    if(!books) return<span></span>
    return (<ul className="search-list">
        {books.map((book, idx) => <li className="search-result" key={idx}>{book.volumeInfo.title} <a className="add-search" onClick={()=>addBook(book)}className="add-search">(+)</a></li>)}
    </ul>)
}





