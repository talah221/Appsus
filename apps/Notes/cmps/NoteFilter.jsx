
export class NoteFilter extends React.Component {

    state = {
        filterBy: ''
    }
    setActive = (value) => {
        this.setState( {filterBy : value} )
        this.props.onSetFilter(value)
    }

    render() {
        const { onSetFilter } = this.props
        return (
            <input name="txt" type="text" className="note-search" placeholder="Search Notes" onChange={(ev) => {
                    this.props.onSetFilter(ev.target.value)
                }} />

      
        );
    }
}
