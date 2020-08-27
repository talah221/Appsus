import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/storageService.js';
export const NoteService = {
    query,
    addNoteToLocal,
    deleteNoteFromLoc,
    getById,
    // addNote,

}

var dataNotes = [
    {
        id : makeId(),
        type: "NoteText",
        isPinned: true,
        info: {
            bgc : '#rrggbb',
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id : makeId(),
        type: "NoteImg",
        info: {
            bgc : '#rrggbb',
            url: "",
            title: "Me playing Mi"
        }
      
    },
    {
        id : makeId(),
        type: "NoteTodos",
        info: {
            bgc : '#rrggbb',
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    }
];
function getById(noteId) {
    var notes = storageService.loadFromStorage('noteList')
    var note = notes.find(note => note.id === noteId)
    return note
}
function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}
function addNoteToLocal(noteTxt, color, type){
    switch (type) {
        case 'NoteText':
            var note =  {
                id: makeId(),
                type: "NoteText",
                isPinned: false,
                info: {
                    txt: noteTxt,
                    bgc : color
                }
            }
            break;
        case 'NoteImg':
          var note =  {
                id : makeId(),
                type: "NoteImg",
                isPinned: false,
                info: {
                    bgc : color,
                    url: noteTxt,
                    // title: "Me playing Mi",
                }
              
            }
            break;
      
    }
  

    var notes = storageService.loadFromStorage('noteList')
    if (!notes) {
        storageService.saveToStorage('noteList', dataNotes)
        notes = dataNotes
    }
    notes.push(note)
    storageService.saveToStorage('noteList', notes)
//    console.log('noteList from storage-checkId: ', storageService.loadFromStorage('noteList'));
}


function deleteNoteFromLoc(id) {
    var notes = storageService.loadFromStorage('noteList')
   notes =  notes.filter(note=>note.id !== id)
     storageService.saveToStorage('noteList', notes)
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
