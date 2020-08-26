import { eventBusService } from '../services/eventBus-service.js'
export class UserMsg extends React.Component {

    state = {
        isShown: false,
        isMsgTrue: true,
        id: ''
    }
    msg;

    closeModal = () => {
        this.setState({ isShown: false })
    }
    componentDidMount() {
        this.msg = eventBusService.on('show-msg', (id) => this.setState({ isShown: true, id }))
    }
    render() {
        return (
            <section className={`modal-wrapper ${this.state.isShown ? '' : 'hide'}`} onClick={this.closeModal}>

                <div className={`modal-content ${this.state.isMsgTrue ? 'true-msg' : 'false-msg'}`} onClick={(ev) => ev.stopPropagation()}>
                    <button onClick={this.closeModal}>x</button>

                    {this.state.isShown && <div>
                        {this.state.isMsgTrue && <div className="succes-msg">
                            <h3>SUCCESS!</h3>
                            <p>Your action has been confirmed!</p>
                        </div>}


                        {!this.state.isMsgTrue && <div className="error-msg">
                            <h3>ERROR!</h3>
                            <p>Your action has been declined!</p>
                        </div>}
                        {this.state.id && <a href={`/#/book/${this.state.id}`}>Check it Out</a>}


                    </div>}
                </div>
            </section>
        )
    }
}

