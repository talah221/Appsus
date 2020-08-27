import { NoteType } from './NoteType.jsx'
export function NoteList( {notes, onDeleteNote}) {

    // console.log(notes);
    return (
        <ul className="note-list">
            { notes.map((note, idx) => 
                <li className="note-card" key={ idx } style={{backgroundColor: `${note.info.bgc}`}}>
                    <NoteType note={ note } />
                    <button onClick={()=>onDeleteNote(note.id)} >X</button>
                </li>)
            }
        </ul>
    )
}

