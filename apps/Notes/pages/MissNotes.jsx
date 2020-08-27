import { NoteList } from "../cmps/NoteList.jsx";
import { NoteAdd } from "../cmps/AddNote.jsx";
import { NoteService } from "../services/note-service.js";
import { Modal } from "../cmps/Modal.jsx";
import { UpdateNote } from "../cmps/UpdateNote.jsx";

export class MissNotes extends React.Component {
  state = {
    notes: null,
    isModalOpen: false,
    currNoteId:0
  };

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = () => {
    console.log("loading notes");
    NoteService.query().then((notes) => {
      // console.log(notes);
      this.setState({ notes });
    });
  };
  deleteNote = (id) => {
      event.preventDefault()
    console.log(id);
    NoteService.deleteNoteFromLoc(id);
    this.loadNotes();
  };
  onSetFilter = () => {};
  onOpenModal = (id) => {
    console.log(id);
    this.setState({ isModalOpen: !this.state.isModalOpen , currNoteId: id });
  };
  render() {
    const { notes, isModalOpen,currNoteId } = this.state;
    if (!notes) return <div>Loading...</div>;
    return (
      <section>
        <NoteAdd onAddNote={this.loadNotes} />
        <NoteList notes={notes} onDeleteNote={this.deleteNote} openModal={this.onOpenModal}/>
         
          {isModalOpen&&<Modal open={isModalOpen} toggleModal={this.onOpenModal} >
            <UpdateNote noteId={currNoteId} />
          </Modal>}
        
      </section>
    );
  }
}
