import {NoteTxt} from './NoteTxt.jsx'
import { NoteImg } from './NoteImg.jsx';
import { NoteTodo } from './NoteTodo.jsx';
import { NoteVideo } from './NoteVideo.jsx';
export function NoteType({ note }) {

    switch (note.type) {
        case 'NoteText':
    return  <NoteTxt note={note}/>
        case 'NoteImg':
        return <NoteImg note = {note} />
        // case 'NoteTodos':
        // return <NoteTodo note = {note} />
        // default:
        case 'NoteVideo':
        return <NoteVideo note = {note} />
        default:
        return 'Under Construction!'
        //...some default error view
        }
        
}
