import { bookService } from '../services/book-service.js'
import {eventBusService} from '../../../services/eventBus-service.js'
export class ReviewAdd extends React.Component {
    state = {
        fullName: '',
        rate: '',
        date: '',
        txt: '',

    }
    elInput = React.createRef()

    componentDidMount() {
        this.elInput.current.focus()
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.value })
    }

    updateReview = (ev) => {
        ev.preventDefault()
        const { bookId, loadBook } = this.props
        bookService.addReview(bookId, this.state)
        loadBook();
        eventBusService.emit('show-msg')

        this.setState({ ...this.state, fullName: '', date: '', txt: '', rate: '' })


    }

    render() {
        const { bookId } = this.props
        const { fullName, rate, date, txt } = this.state
        return <form onSubmit={this.updateReview}><div>
            Full Name: <input ref={this.elInput} name="fullName" onChange={this.handleChange} type="text" placeholder="Books Reader" value={fullName} /> </div>
            <div>Rate <select value={rate} name="rate" onChange={this.handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select></div>
            <div>Readed At: <input value={date} name="date" type="date" id="" onChange={this.handleChange} /></div>
            <div><textarea value={txt} name="txt" placeholder="Enter short review" onChange={this.handleChange}></textarea></div>
            <button className="submit-btn btn" onClick={this.updateReview}>Submit</button>
        </form>
    }
}