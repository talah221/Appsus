import { utilService } from '../../../services/util-service.js'
const {Link} = ReactRouterDOM


export function BookPreview({ book }) {


    return<Link to={`/book/${book.id}`}> <article className="book-preview">
        <h3 className="book-title">{book.title}</h3>
        <h4 className="book-price">Price: {book.listPrice.amount}{utilService.getCurrencyIcon(book.listPrice.currencyCode)}</h4>
    </article>
    </Link>
}