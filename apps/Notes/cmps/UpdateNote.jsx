import { NoteService } from "../services/note-service.js";
import { EditTxtNote } from "./EditTxtNote.jsx";
export class UpdateNote extends React.Component {
    state = {note:NoteService.getById(this.props.noteId)}
   
    txtHandleChange = (event) => {
        this.setState({ note: event.target.value });
      };

    render() {
       const {note} = this.state
        return (
            <div>
                <h2>Edit Yo Note</h2>
                <EditTxtNote note = {note}/>
              
            </div>
        )
    }
    
}
