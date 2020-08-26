import { NoteType } from './NoteType.jsx'
export function NoteList( {notes}) {
    console.log(notes);
    return (
        <ul className="note-list">
            { notes.map((note, idx) => 
                <li className="note-card" key={ idx }>
                   
                    <NoteType note={ note } />
                </li>)
            }
        </ul>
    )
}

