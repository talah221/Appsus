import { misterEmailService } from '../services/misterEmail-service.js'
import { eventBusService } from '../../../services/eventBus-service.js'

export class MailCompose extends React.Component {
    state = {
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
        ev.preventDefault()
        const { subject, body } = this.state
        misterEmailService.addMail(subject, body)
        this.setState({ subject: '', body: '' })
        eventBusService.emit('show-msg')
        this.props.loadMails()

    }
    render() {
        const { subject, body } = this.state
        return (
            <div>
                <form onSubmit={this.sendMail}>
                    Subject: <input ref={this.elInput} value={subject} type="text" name="subject" placeholder="Mail Subject" onChange={this.handleChange} />
                    <div>Mail Body: <textarea placeholder="Mail Body" value={body} name="body" onChange={this.handleChange}></textarea></div>
                    <button onClick={this.sendMail}>Submit</button>
                </form>
            </div>
        );
    }
}
