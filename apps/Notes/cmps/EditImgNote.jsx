import { NoteService } from "../services/note-service.js";

export class EditImgNote extends React.Component {
    state = {note : this.props.note}

    urlHandleChange = (event) => {
        var edditedNote =this.state.note
        edditedNote.info.url = event.target.value
        this.setState({ note:edditedNote });
      };
      titleHandleChange= (event) => {
        var edditedNote =this.state.note
        edditedNote.info.title = event.target.value
        this.setState({ note:edditedNote });
      }
      colorHandleChange = (event) => {
        var edditedNote =this.state.note
        edditedNote.info.bgc = event.target.value
        this.setState({ note:edditedNote});
      };
    
      handleSubmit = () => {
        NoteService.updateNoteToLocal(this.state.note)
        this.props.loadNotes()
        this.props.toggleModal()
      };
     

    render() {
        const {note} = this.state
        return (

            <div >
                <h3>{note.info.title}</h3>
                <div className='note-image' style={{backgroundImage: `url(${note.info.url})`}} > </div>
                 <form onSubmit={this.handleSubmit} className={'update-note'}>
                <div> <input type="text" className="input-text" value={note.info.url} onChange={this.urlHandleChange} /></div>
                <div> <input type="text" className="input-text" value={note.info.title} onChange={this.titleHandleChange} /></div>
                <div>
                <label htmlFor={note.id}><i className="fas fa-palette icons"></i></label>
                <div><input type="color" id={note.id} className="display-none" value={note.info.bgc} onChange={this.colorHandleChange} /></div>
                </div>
                {/* <div><input type="color" value={note.info.bgc} onChange={this.colorHandleChange} /></div> */}

                <label htmlFor="update-submit"><i className="far fa-save icons"></i></label>
                <div><input id="update-submit" type="submit" className="display-none"  value="Submit"/></div>
                {/* <div><input type="submit" value="Submit"/></div> */}
                </form>
            </div>
        )
    }
}

