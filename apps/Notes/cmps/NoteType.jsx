import {NoteTxt} from './NoteTxt.jsx'
export function NoteType({ note }) {
    console.log(note);

    switch (note.type) {
        case 'NoteText':
    return  <NoteTxt note={note}/>

        // <NoteTxt   note = {note} /> 
        // case 'GoodBye':
        // return <GoodBye {...props} />
        // case 'WelcomeBack':
        // return <WelcomeBack {...props} />
        default:
        return 'Under Construction!'
        //...some default error view
        }
        
}
