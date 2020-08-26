import { BookPreview } from './BookPreview.jsx'
export function BookList({ books}) {
    return (
        <ul className="book-list">
            { books.map(book =>
                <li className="book-card" key={ book.id }>
                    <img className="img-list"src={book.thumbnail} alt=""/>
                    <BookPreview book={ book } />
                </li>)
            }
        </ul>
    )
}

