import { NoteType } from './NoteType.jsx'
export function NoteList( {notes, onDeleteNote, openModal}) {

    // console.log(notes);
    return (
        <ul className="note-list">
            { notes.map(note => 
      
                <li className="note-card"  key={ note.id } style={{backgroundColor: `${note.info.bgc}`}}>
                    <NoteType note={ note } />
                    <button onClick={()=>onDeleteNote(note.id)} >X</button>
                    <button onClick={()=>openModal(note.id)}>Edit</button>
                </li>
                
                )
            }
        </ul>
    )
}

