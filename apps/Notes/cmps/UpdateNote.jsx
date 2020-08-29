import { NoteService } from "../services/note-service.js";
import { EditTxtNote } from "./EditTxtNote.jsx";
import { EditImgNote } from "./EditImgNote.jsx";
import { EditVidNote } from "./EditVidNote.jsx";
export class UpdateNote extends React.Component {
    state = {note:NoteService.getById(this.props.noteId)}
   componentDidMount(){
       console.log(this.props.noteId);
   }
    txtHandleChange = (event) => {
        this.setState({ note: event.target.value });
      };

    render() {
       const {note} = this.state
        return (
            <div style={{backgroundColor: `${note.info.bgc}`}}>
            <button className="modal-btn" onClick={this.props.toggleModal }><i className="fas fa-times-circle"></i></button>
            {(note.type==='NoteText') && <EditTxtNote note = {note} toggleModal={this.props.toggleModal} loadNotes={this.props.loadNotes}/>}
            {(note.type==='NoteImg') && <EditImgNote note = {note} toggleModal={this.props.toggleModal} loadNotes={this.props.loadNotes}/>}
            {(note.type==='NoteVideo') && <EditVidNote note = {note} toggleModal={this.props.toggleModal} loadNotes={this.props.loadNotes}/>}
              
            </div>
        )
    }
    
}
