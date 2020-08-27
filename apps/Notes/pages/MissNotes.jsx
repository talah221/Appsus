
import { NoteList } from '../cmps/NoteList.jsx';
import { NoteAdd } from '../cmps/AddNote.jsx';
import { NoteService } from '../services/note-service.js'

export class MissNotes extends React.Component {
    state = {
        notes: null,
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        console.log('loading notes');
        NoteService.query()
            .then(notes => {
                // console.log(notes);
                this.setState({ notes });
            })
    }
    deleteNote = (id) => {
        console.log(id);
        NoteService.deleteNoteFromLoc(id)
        this.loadNotes()
    }
    onSetFilter = () => {
    }

    render() {  
        const { notes } = this.state
        if(!notes) return <div>Loading...</div>
        return (
            <section>
                <NoteAdd onAddNote={this.loadNotes}/>
                <NoteList notes={notes} onDeleteNote={this.deleteNote} />
            </section>
        )
    }
}
