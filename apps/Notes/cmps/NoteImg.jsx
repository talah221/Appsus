export class NoteImg extends React.Component {
 
  render() {
    return (
  <img src={this.props.note.info.url} alt="image" />
  )}
}
