import { storageService } from '../../../services/storageService.js';
export const NoteService = {
    query,
    addNoteToLocal,
    deleteNoteFromLoc,
    getById,
    updateNoteToLocal,
    makeId,
    deleteTodoFromLoc ,
    SaveNoteTimeDone,
    makeTodos,
    // addNote,

}
var gId = 15;

var dataNotes = [
    {
        id : 1,
        type: "NoteText",
        isPinned: true,
        info: {
            bgc : 'lightgreen',
            txt: "Finish The Sprint And Sleep"
        }
    },
    {
        id : 2,
        type: "NoteImg",
        info: {
            bgc : 'white',
            url: "https://cf.bstatic.com/images/hotel/max1024x768/116/116281457.jpg",
            title: "My Favorite Spot In Thailand"
        }
      
    },
    {
        id : 3,
        type: "NoteVideo",
        info: {
            bgc : 'white',
            title: "How was it:",
            url:"https://www.youtube.com/embed/otNWUEa42Kw"
        }
    },
    {
        id : 4,
        type: "NoteText",
        isPinned: true,
        info: {
            bgc : 'lightyellow',
            txt: "All our dreams can come true, if we have the courage to pursue them"
        }
    },
    {
        id : 5,
        type: "NoteImg",
        info: {
            bgc : 'darkgrey',
            url:"https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-9/106547117_726109338172105_6899899503997680856_n.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_ohc=TmuTATMNsuYAX-SqJXz&_nc_ht=scontent.fsdv2-1.fna&oh=8b48b808c3fd7aea21f0150569b34e8a&oe=5F6F9E7C" ,
            title: "Is it Hot In Here?"
        }
      
    },
    {
        id : 6,
        type: "NoteVideo",
        info: {
            bgc : 'darkgrey',
            title: "Katias Favorite Song!",
            url:"https://www.youtube.com/embed/hsm4poTWjMs"
        }
    }
];
 function deleteTodoFromLoc(idx,noteToChange) {
    var notes = storageService.loadFromStorage('noteList')
    if (!notes) {
        storageService.saveToStorage('noteList', dataNotes)
        notes = dataNotes
    }
   

     noteToChange.info.todos.splice(idx, 1);
     console.log("notes todos", notes);
     notes =  notes.map(note=>{
         return note.id===noteToChange.id? noteToChange : note
          }     )
          storageService.saveToStorage('noteList', notes)
          return noteToChange
 }

function SaveNoteTimeDone(noteToChange, todos){
    noteToChange.info.todos = todos
    var notes = storageService.loadFromStorage('noteList')
    if (!notes) {
        storageService.saveToStorage('noteList', dataNotes)
        notes = dataNotes
    }
    notes =  notes.map((note)=> (note.id===noteToChange.id)? noteToChange : note)
    console.log(noteToChange , 'notetodo save');
    storageService.saveToStorage('noteList', notes)
}



function updateNoteToLocal(noteToUpdate) {
    var notes = storageService.loadFromStorage('noteList')
  notes =  notes.map((note)=> (note.id===noteToUpdate.id)? noteToUpdate : note)
  console.log(notes, noteToUpdate);
    storageService.saveToStorage('noteList', notes)
}

function getById(noteId) {
    var notes = storageService.loadFromStorage('noteList')
    var note = notes.find(note => note.id === noteId)
    return note
}
function makeTodos(txt) {
    var todosObj = []
    var todosArr = txt.split(',')
    for (let i = 0; i < todosArr.length; i++) {
        let todo = todosArr[i];
        todosObj.push({txt:todo, doneAt: false})  }
    return todosObj;
}


function addNoteToLocal(noteTxt, color='white', type){
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
                    title: "Add Title",
                }
              
            }
            break;
        case 'NoteVideo':
          var note =  {
                id : makeId(),
                type: "NoteVideo",
                isPinned: false,
                info: {
                    bgc : color,
                    url: noteTxt,
                    title: "Add Title",
                }
              
            }
            break;
        // case 'NoteTodos':
        //   var note =  {
        //     id : makeId(),
        //     type: "NoteTodos",
        //     info: {
        //         bgc : color,
        //         title: "How was it:",
        //         todos: makeTodos(noteTxt)
        //     }
        //     }
        //     break;

            default:  var note =  {
                id: makeId(),
                type: "NoteText",
                isPinned: false,
                info: {
                    txt: noteTxt,
                    bgc : color
                }
            }
        break; 
    }

    note = easterEgg(note)
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
    console.log(filterBy);
    var notes = storageService.loadFromStorage('noteList')
    if (!notes) {
        storageService.saveToStorage('noteList', dataNotes)
        notes = dataNotes
    }
    if (filterBy) {
        notes = notes.filter(note =>{
            switch (note.type) {
                case 'NoteText':  return  note.info.txt.toLowerCase().includes(filterBy.toLowerCase());
                case 'NoteImg': return note.info.title.toLowerCase().includes(filterBy.toLowerCase());
                case 'NoteVideo': return note.info.title.toLowerCase().includes(filterBy.toLowerCase());
                default: return true;
            }
       })
    
    }
    return Promise.resolve(notes)

}


function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function easterEgg(note) {
    if(note.type==="NoteImg" && note.info.url.includes('shit')){
        note.info.url=  "https://media.tenor.com/images/eb4d6adca89d4353115e8eae5a7180a1/tenor.gif";
    }
 return note
}