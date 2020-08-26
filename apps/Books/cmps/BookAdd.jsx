import { bookService } from '../services/book-service.js'
import { SearchList } from './SearchList.jsx'
import {eventBusService} from '../../../services/eventBus-service.js'

export class BookAdd extends React.Component {

    state = {
        bookList: null
    }
    onChangeInp(ev) {
        bookService.getResult(ev.target.value).then(data => this.setState({ bookList: data.items }))
    }

    addBook = (googleBook) => {
        console.log('adding');
        bookService.addGoogleBook(googleBook)
        this.props.onAddBook()
        eventBusService.emit('show-msg',googleBook.id)

    }
    render() {
        return (<div className="add-book">
            Search book <input type="text" name="" id="" onChange={(ev) => this.onChangeInp(ev)} placeholder="Search/add a new book" />
            <SearchList books={this.state.bookList} addBook={this.addBook} />
        </div>)
    }
}