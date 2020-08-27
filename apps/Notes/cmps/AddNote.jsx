import { NoteService } from "../services/note-service.js";
import { storageService } from "../../../services/storageService.js";

export class NoteAdd extends React.Component {
  state = {
    note: "",
    color:'#rrggbb',
    type:'NoteText',
  };
  txtHandleChange = (event) => {
    this.setState({ note: event.target.value });
  };
  colorHandleChange = (event) => {
    this.setState({ color: event.target.value });
    // console.log(this.state.color);
  };

  handleSubmit = () => {
    this.addNote();
    
    event.preventDefault();
  };

  addNote = ()=> {
    // console.log(this.state.notes);
    NoteService.addNoteToLocal(this.state.note, this.state.color, this.state.type);
    this.props.onAddNote();
    this.setState({ note: "", color: "#rrggbb" });

  }
  changeType = (val) =>{
this.setState({type:val})
console.log(val);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={'make-note'}>
        
          Note:
         <div> <input type="text" value={this.state.note} onChange={this.txtHandleChange} /></div>
         <div><input type="color" value={this.state.color} onChange={this.colorHandleChange} /></div>
          <div onClick={ ()=> this.changeType('NoteImg')}>image</div>
          <div onClick={ ()=> this.changeType('NoteText')}>text</div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
