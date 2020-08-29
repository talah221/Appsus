import { MissNotes } from "../apps/Notes/pages/MissNotes.jsx"

export class NotesApp extends React.Component {
    state = {
        notes: ''
    }

    componentDidMount() {

    }

    loadNotes = () => {

    }
    onSetFilter = () => {

    }


    render() {
        const { notes } = this.state
        return (
            <section>
                <MissNotes />
            </section>
        )
    }
}
