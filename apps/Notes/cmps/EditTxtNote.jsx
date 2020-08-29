import { NoteService } from "../services/note-service.js";

export class EditTxtNote extends React.Component {
    state = {note : this.props.note}

    txtHandleChange = (event) => {
        var edditedNote =this.state.note
        edditedNote.info.txt = event.target.value
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
                  <p>{note.info.txt}</p>
                 <form onSubmit={this.handleSubmit} className={'update-note'}>
                <div className="txt-edit"> 
                  <input type="text" className="input-text" value={note.info.txt} onChange={this.txtHandleChange} /></div>
                <div>
                <label htmlFor='update-color'><i className="fas fa-palette icons"></i></label>
                <div><input type="color" id='update-color' className="display-none" value={note.info.bgc} onChange={this.colorHandleChange} /></div>
            
                <label htmlFor="update-submit"><i className="far fa-save icons"></i></label>
                <div><input id="update-submit" type="submit" className="display-none"  value="Submit"/></div>
              </div> 
               </form>
            </div>
        )
    }
}

