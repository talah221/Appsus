import {NoteTxt} from './NoteTxt.jsx'
import { NoteImg } from './NoteImg.jsx';
export function NoteType({ note }) {

    switch (note.type) {
        case 'NoteText':
    return  <NoteTxt note={note}/>
        case 'NoteImg':
        return <NoteImg note = {note} />
        // case 'WelcomeBack':
        // return <WelcomeBack {...props} />
        default:
        return 'Under Construction!'
        //...some default error view
        }
        
}
