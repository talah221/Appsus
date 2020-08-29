// import { NoteService } from "../services/note-service.js"

// export class NoteTodo extends React.Component {
//         state= { note : this.props.note}
// componentDidMount(){
//     console.log(this.state.note);
// }    
// deleteTodo = (idx, note) =>{
//     console.log( idx , "idx");
//     console.log(note, "note");
//     let note= NoteService.deleteTodoFromLoc(idx, note)
//     this.setState({note:note})
// }
// done = (event,idx) =>{
//   if(!this.state.note.info.todos[idx].doneAt){
//       let time = new Date()
//     event.stopPropagation()
//     var note =this.state.note
//     note.info.todos[idx].doneAt = time
//     NoteService.SaveNoteTimeDone(this.state.note , this.state.note.info.todos)
//     this.setState({note:note})
// }  }

// render() {
//         const {note} =this.state
//       return (
//         <section>
//         <h3>{this.props.note.info.title}</h3>
//         <ul className="todos-list">
//         { 
//             note.info.todos.map((todo, index) => 
//             <li className="todo-li"  key={ NoteService.makeId() } onClick={(e)=>{this.done(e,index)}}>
//              <div>{todo.txt} {todo.doneAt&&<span>{todo.doneAt}✔️</span>}<button onClick={ () =>this.deleteTodo(index, this.props.note)} >X</button></div>  
//             </li>
//         )
//         }
//     </ul>
//     </section>

//   )
// }
// }