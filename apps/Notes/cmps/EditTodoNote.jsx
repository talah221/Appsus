// import { NoteService } from "../services/note-service.js";
// import { NoteTodo } from "./NoteTodo.jsx";

// export class EditTodoNote extends React.Component {
//     state = {note : this.props.note}
//     makeTodos(txt) {
//         var todosObj = []
//         var todosArr = txt.split(',')
//         for (let i = 0; i < todosArr.length; i++) {
//             let todo = todosArr[i];
//             todosObj.push({txt:todo, doneAt: null})  }
//         return todosObj;
//     }
    
//     titleHandleChange= (event) => {
//         var edditedNote =this.state.note
//         edditedNote.info.title = event.target.value
//         this.setState({ note:edditedNote });
//       }

      
//       colorHandleChange = (event) => {
//         var edditedNote =this.state.note
//         edditedNote.info.bgc = event.target.value
//         this.setState({ note:edditedNote});
//       };
    
//       handleSubmit = () => {
//         NoteService.updateNoteToLocal(this.state.note)
//         this.props.loadNotes()
//         this.props.toggleModal()
//       };

//       deleteTodo = (idx, note) =>{
//           console.log( idx , "idx");
//           console.log(note, "note");
//           let newTodos= NoteService.deleteTodoFromLoc(idx, note)
//           var note =this.state.note
//           note.info.todos = newTodos
//           this.setState({note:note})
//       }
//       done = (event,idx) =>{
//         if(!this.state.note.info.todos[idx].doneAt){
//             let time = new Date()
//           event.stopPropagation()
//           var note =this.state.note
//           note.info.todos[idx].doneAt = time
//           NoteService.SaveNoteTimeDone(this.state.note , this.state.note.info.todos)
//           this.setState({note:note})
//       }  }
//     render() {
//         const {note} = this.state
//         return (       

//             <div>
//             <h3>{note.info.title}</h3>

//                 <ul className="todos-list">
//         { 
//             note.info.todos.map((todo, index) => 
//             <li className="todo-li"  key={ NoteService.makeId() } onClick={(e)=>{this.done(e,index)}}>
//              <div>{todo.txt} {todo.doneAt&&<span>{todo.doneAt}✔️</span>}<button onClick={ () =>this.deleteTodo(index, this.props.note)} >X</button></div>  
//             </li>
//         )
//         }
//     </ul>
//                   <p>{note.info.txt}</p>
//                  <form onSubmit={this.handleSubmit} className={'update-note'}>
//                 <div> <input type="text" value={note.info.title} onChange={this.titleHandleChange} /></div>
//                 <div><input type="color" value={note.info.bgc} onChange={this.colorHandleChange} /></div>
//                 <div><input type="submit" value="Submit"/></div>
//                 </form>
//             </div>
//         )
//     }
// }

