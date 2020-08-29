
export class NoteVideo extends React.Component {
    render() {
      return (
        <section>
          <h3>{this.props.note.info.title}</h3>
  
        <iframe width="150" height="150" src={this.props.note.info.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; " ></iframe>
        </section>
    )}
  }
  

