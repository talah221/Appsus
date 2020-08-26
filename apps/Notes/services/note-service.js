import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/storageService.js';
export const NoteService = {
    query,
    addNoteToLocal
    // getById,
    // addNote,

}
var dataNotes = [
    {
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        type: "NoteImg",
        info: {
            url: "http://some-img/me",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        type: "NoteTodos",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    }
];

function addNoteToLocal(note){
  var note =  {
        id: 1,
        type: "NoteText",
        isPinned: false,
        info: {
            txt: note
        }
    }
    dataNotes.push(note)
    storageService.saveToStorage('noteList', dataNotes)
   
}

function query(filterBy) {
    // console.log('query');
    // if (filterBy) {
    //     //TODO:filterby
    //     return Promise.resolve(dataNotes)
    // } 
    //   else return Promise.resolve(dataNotes)
    var notes = storageService.loadFromStorage('noteList')
    if (!notes) {
        storageService.saveToStorage('noteList', dataNotes)
        notes = dataNotes
    }
    return Promise.resolve(notes)
}
