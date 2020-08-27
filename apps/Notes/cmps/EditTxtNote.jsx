
export class EditTxtNote extends React.Component {
    state = {note : this.props.note}
componentDidMount(){
console.log(this.state.note);
}
    txtHandleChange = (event) => {
        this.state.note.info.txt = event.target.value
        var edditedNote =this.state.note
        edditedNote.info.txt = event.target.value
        this.setState({ note:edditedNote });
      };
      colorHandleChange = (event) => {
        this.state.note.info.txt = event.target.value
        var edditedNote =this.state.note
        edditedNote.info.txt = event.target.value

         
        this.setState({ note:edditedNote});
        // console.log(this.state.color);
      };
    
      handleSubmit = () => {
        this.addNote();
        
        event.preventDefault();
      };
      addNote = ()=> {
       console.log();
    
      }

    render() {
        const {note} = this.state
        return (
            <div>
                a
                 <form onSubmit={this.handleSubmit} className={'update-note'}>
                <div> <input type="text" value={note.info.txt} onChange={this.txtHandleChange} /></div>
                <div><input type="color" value={note.info.bgc} onChange={this.colorHandleChange} /></div>
                </form>
            </div>
        )
    }
}

