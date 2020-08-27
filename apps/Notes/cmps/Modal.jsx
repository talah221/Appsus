
export class Modal extends React.Component {
    state = {
        isShown: true
    }
    componentDidMount() {
        this.setState({isShown:true})
    }
    
    closeModal = () => {
        this.setState({ isShown: false })
    }
    render() {
        const { isShown } = this.state
        const { children, toggleModal } = this.props
        return (
            <div className={ `modal-wrapper ${isShown ? '' : 'hide'}` } onClick={ toggleModal } >
                <div className="modal-content" onClick={ (ev) => ev.stopPropagation() }>
                    <button onClick={ toggleModal }>X</button>
                    { children }
                </div>
            </div >
        )
    }
}
