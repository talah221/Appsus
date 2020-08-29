import { NoteType } from './NoteType.jsx'
export function NoteList( {notes, onDeleteNote, openModal}) {

    // console.log(notes);
    return (
        <ul className="note-list">
            { notes.map(note => 
      
                <li className="note-card"  key={ note.id } style={{backgroundColor: `${note.info.bgc}`}}>
                    <NoteType note={ note } />
                    <div>
                    <button className="note-li-btn" onClick={()=>onDeleteNote(note.id)} ><i className="fas fa-trash-alt icons"></i></button>
                    <button className="note-li-btn" onClick={()=>openModal(note.id)}><i className="fas fa-edit icons"></i></button>
</div>

                    
                </li>
                
                )
            }
        </ul>
    )
}

