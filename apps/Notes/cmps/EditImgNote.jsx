import { NoteService } from "../services/note-service.js";

export class EditImgNote extends React.Component {
    state = {note : this.props.note}

    txtHandleChange = (event) => {
        var edditedNote =this.state.note
        edditedNote.info.url = event.target.value
        this.setState({ note:edditedNote });
      };
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
            <div>
                a
                 <form onSubmit={this.handleSubmit} className={'update-note'}>
                <div> <input type="text" value={note.info.url} onChange={this.txtHandleChange} /></div>
                <div><input type="color" value={note.info.bgc} onChange={this.colorHandleChange} /></div>
                <div><input type="submit" value="Submit"/></div>
                </form>
            </div>
        )
    }
}

