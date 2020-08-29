import { misterEmailService } from '../services/misterEmail-service.js'
import { eventBusService } from '../../../services/eventBus-service.js'

export class MailCompose extends React.Component {
    state = {
        isShown: true,
        subject: '',
        body: ''
    }

    elInput = React.createRef()

    componentDidMount() {
        this.elInput.current.focus()
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.value })
    }

    sendMail = (ev) => {
        const { toggleCompose, loadMails } = this.props
        ev.preventDefault()
        const { subject, body } = this.state
        if (!subject && !body) {
            eventBusService.emit('show-msg', false)
            toggleCompose()
            return;
        }
        misterEmailService.addMail(subject, body)
        this.setState({ subject: '', body: '' })
        eventBusService.emit('show-msg', true)
        toggleCompose()
        loadMails()

    }
    render() {
        const { subject, body } = this.state
        const { toggleCompose } = this.props
        return (
            <div className="modal-wrapper" onClick={toggleCompose}>
                <form onSubmit={this.sendMail} className="modal-content flex send-mail" onClick={(ev) => ev.stopPropagation()}>
                    <input className="new-mail-subject" ref={this.elInput} value={subject} type="text" name="subject" placeholder="Subject" onChange={this.handleChange} />
                    {/* <div><input className="new-mail-body" type="text" placeholder="Mail Body" name="body" value={body} onChange={this.handleChange} /></div> */}
                    <div><textarea className="new-mail-body" placeholder="Mail content" value={body} name="body" onChange={this.handleChange}></textarea></div>
                    <button className="submit-mail btn" onClick={this.sendMail}>Submit</button>
                </form>
            </div>
        );
    }
}
