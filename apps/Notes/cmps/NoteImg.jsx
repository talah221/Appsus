export class NoteImg extends React.Component {
 
  render() {
    return (
      <section>
        <h3>{this.props.note.info.title}</h3>
      <div className='note-image-list' style={{backgroundImage: `url(${this.props.note.info.url})`}} > </div> 
      
      </section>
  )}
}
