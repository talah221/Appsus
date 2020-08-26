import { NoteService } from '../services/note-service.js'
import { storageService } from '../../../services/storageService.js';

export class NoteAdd extends React.Component {

    state = {
        notes: ''
    }
    handleChange = (event) =>{
        this.setState({ notes: event.target.value });
      }
    
      handleSubmit = () => {
        this.addNote()
        event.preventDefault();
      }
    addNote = () => {
        console.log(this.state.notes);
        NoteService.addNoteToLocal(this.state.notes)
        this.props.onAddNote()
        // this.setState({notes : ''})
        // bookService.addGoogleBook(googleBook)
        // this.props.onAddBook()
        // eventBusService.emit('show-msg',googleBook.id)

    }
    render() {
        return (
        // <form className="add-note" onSubmit={()=>console.log(this.target.value)}>
        //     Write a note <input type="text" name="" id="" placeholder="Add a new note" />
        //     <button>Add Me!</button>
        
            <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.notes} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
        
        )
    }
}