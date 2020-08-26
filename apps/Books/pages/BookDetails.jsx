import { utilService } from '../../../services/util-service.js'
import { LongTxt } from '../cmps/LongTxt.jsx'
import { bookService } from '../services/book-service.js'
import { ReviewAdd } from '../cmps/ReviewAdd.jsx'
import { Reviews } from '../cmps/Reviews.jsx'
const { Link } = ReactRouterDOM


export class BookDetails extends React.Component {
    state = {
        isLongTxtShown: false,
        book: null
    }


    componentDidMount() {
        this.loadBook()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.bookId !== this.props.match.params.bookId) {
            this.loadBook()
        }
    }



    loadBook = () => {
        const { bookId } = this.props.match.params
        bookService.getBookById(bookId)
            .then(book => this.setState({ book }))
    }

    getPageTxt = (bookLength) => {
        if (bookLength > 500) return 'Long Reading';
        else if (bookLength < 500 && bookLength > 200) return 'Decent Reading'
        else return 'Light Reading'

    }

    getPublishTxt = (publishYear) => {
        const CURR_YEAR = 2020;
        if (CURR_YEAR - publishYear >= 10) return 'Veteran'
        else return 'New!'

    }

    renderImg = (boolean) => {
        if (!boolean) return;
        else return (
            <img className="onsale-img" src="https://lh3.googleusercontent.com/proxy/i5WsuhCPN9iRMKJA4Y977uEWMfXLQJ7uPRW1SxiTDUABse76y1tMVwUAV0rsU_3cyXpqTTwgH2SEUqxhu_ggCAoZp6cEo-llKVbq72DnNqL9PkCryVwkfs4K5Ak4DXma" alt="ON SALE!" />
        )

    }

    readMore = () => {
        this.setState({ isLongTxtShown: !this.state.isLongTxtShown })
    }

    deleteReview = (reviewId) => {
        bookService.deleteReview(reviewId, this.state.book.id)
        this.loadBook()
    }




    render() {
        const { book } = this.state
        if (!book) return <div>Loading....</div>

        const { prevBookId, nextBookId } = bookService.getNextPrev(book.id)
        if (!book) return <h1>Loading...</h1>
        const { isOnSale } = book.listPrice
        const priceColor = (book.listPrice.amount > 150) ? 'red' : (book.listPrice.amount <= 20) ? 'green' : ''
        return (
            <div className="book-details">
                <h1 className="book-title">{book.title}</h1>
                <h4 className="book-subtitle">{book.subtitle}</h4>
                <div className="book-pages">
                    This Is a {this.getPageTxt(book.pageCount)} Book,
                   it has {book.pageCount} Pages</div>

                <div className="book-publish">
                    This book is {this.getPublishTxt(book.publishedDate)}, and Published at {book.publishedDate}
                </div>
                <h4 className="book-price">Price:<span className={priceColor}>{book.listPrice.amount}{utilService.getCurrencyIcon(book.listPrice.currencyCode)}</span></h4>
                <div>{this.renderImg(isOnSale)}</div>
                <div className="read-more" onClick={this.readMore}>...</div>
                <LongTxt text={book.description} isLongTxtShown={this.state.isLongTxtShown} />
                {(book.reviews && book.reviews.length > 0) && <Reviews bookReviews={book.reviews} deleteReview={this.deleteReview} />}
                <ReviewAdd bookId={book.id} loadBook={this.loadBook} />
                <div>
                    <Link to={`/book/${nextBookId}`}>Next</Link> |
                    <Link to={`/book/${prevBookId}`}>Prev</Link>
                </div>
                <a className="return-btn btn" onClick={() => this.props.history.push('/book')}>Return</a>
            </div>
        )

    }
}
