import { NoteService } from "../services/note-service.js";
import { storageService } from "../../../services/storageService.js";

export class NoteAdd extends React.Component {
  state = {
    note: "",
    color: '#rrggbb',
    type: '',
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

  addNote = () => {
    // console.log(this.state.notes);
    NoteService.addNoteToLocal(this.state.note, this.state.color, this.state.type);
    this.props.onAddNote();
    this.setState({ note: "", color: "#rrggbb" });

  }
  changeType = (val) => {
    this.setState({ type: val })
    console.log(val);
    console.log(this.state.type);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className='make-note'>
        <textarea style={{ borderRadius: '10px', border: 'none' }} placeholder="Start Typing.." value={this.state.note} onChange={this.txtHandleChange} className="note-placeholer"></textarea>
        {/* <div> <input type="text" value={this.state.note} onChange={this.txtHandleChange} className="note-placeholer" placeholder="Start Typing.."/></div> */}
        <div className="note-form">
          <label htmlFor="color">
            <i className="fas fa-palette icons"></i>
          </label>
          <div><input type="color" id="color" className="display-none" value={this.state.color} onChange={this.colorHandleChange} /></div>

          <div onClick={() => this.changeType('NoteImg')}><i className={`far fa-image icons ${this.state.type === 'NoteImg' ? 'active-icon' : ''}`}></i></div>

          <div onClick={() => this.changeType('NoteText')}><i className={`fas fa-font icons ${this.state.type === 'NoteText' ? 'active-icon' : ''}`}></i></div>

          {/* <div onClick={ ()=> this.changeType('NoteTodos')}>ToDo</div> */}
          <div onClick={() => this.changeType('NoteVideo')}><i className={`fas fa-video icons ${this.state.type === 'NoteVideo' ? 'active-icon' : ''}`}></i></div>


          <label htmlFor="submit-note"><i className="far fa-sticky-note icons"></i>
          </label>
          <input type="submit" value="s" id="submit-note" className="display-none" />
        </div>

      </form>
    );
  }
}
