import { NoteList } from "../cmps/NoteList.jsx";
import { NoteAdd } from "../cmps/AddNote.jsx";
import { NoteService } from "../services/note-service.js";
import { Modal } from "../cmps/Modal.jsx";
import { UpdateNote } from "../cmps/UpdateNote.jsx";
import { NoteFilter } from "../cmps/NoteFilter.jsx";

export class MissNotes extends React.Component {
  state = {
    filterBy: '' ,
    notes: null,
    isModalOpen: false,
    currNoteId:1
  };

  componentDidMount() {
    this.loadNotes();
  }

  

  loadNotes = () => {
    NoteService.query(this.state.filterBy).then((notes) => {
      this.setState({ notes });
    });
  };
  deleteNote = (id) => {
      event.preventDefault()
    NoteService.deleteNoteFromLoc(id);
    this.loadNotes();
  };
  onSetFilter = (value, name) => {
    console.log(value);
    this.setState({ filterBy: value }, this.loadNotes)


}
  onOpenModal = (id) => {
    this.setState({ isModalOpen: !this.state.isModalOpen , currNoteId: id });
  };
  render() {
    const { notes, isModalOpen,currNoteId } = this.state;
    if (!notes) return <div>Loading...</div>;
    return (
      <section>
        <NoteFilter onSetFilter={this.onSetFilter} />
        <NoteAdd onAddNote={this.loadNotes} />
        <NoteList notes={notes} onDeleteNote={this.deleteNote} openModal={this.onOpenModal}/>
         
          {isModalOpen&&<Modal open={isModalOpen} toggleModal={this.onOpenModal} >
            <UpdateNote noteId={currNoteId} toggleModal={this.onOpenModal} loadNotes={this.loadNotes}/>
          </Modal>}
        
      </section>
    );
  }
}
