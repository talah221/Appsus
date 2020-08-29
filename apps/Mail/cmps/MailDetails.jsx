

// export class MailDetails extends React.Component {


//     render() {
//         const { mail } = this.props
//         return (
//             <section>
//                 <h3>{mail.subject} </h3>
//                 <span>{mail.username} {'<'}{mail.usermail}{'>'}   </span>
//                 <p >{mail.body}</p>
//                 <div className="del-btn" onClick={() => this.props.deleteMail(mail.id)}>
//                     <i className="fas fa-trash" ></i>
//                 </div>
//             </section>
//         );
//     }
// }


// export function MailDetails({ mail, clock, deleteMail }) {
//     return (
//         <section className="flex">
//             <div className="mail-content flex">
//                 <h3>{mail.username}</h3>
//                 <h3>{mail.subject} </h3>
//                 <span className="user-info">{mail.username} {'<'}{mail.usermail}{'>'}   </span>
//                 <p >{mail.body}</p>
//                 <span>Sent at {clock}</span>
//                 <button onClick>Add To Notes</button>
//             </div>
//             <div className="del-btn mt-3" onClick={() => deleteMail(mail.id)}>
//                 <i className="fas fa-trash" ></i>
//             </div>
//         </section>
//     );
// }


import { NoteService } from '../../Notes/services/note-service.js'
import {eventBusService} from '../../../services/eventBus-service.js'
export class MailDetails extends React.Component {

    state = {
        username: 'gg',
        subject: '',
        usermail: '',
        body: '',

    }

    componentDidMount() {
        this.updateState()
    }

    updateState = () => {
        const { mail } = this.props
        this.setState({ username: mail.username, subject: mail.subject, usermail: mail.usermail, body: mail.body })

    }

    addToNotes = (ev) => {
        // ev.preventDefault()
        ev.stopPropagation()
        const makeMailToStr=`(${this.state.username}):, (${this.state.body}) (${this.props.clock})`
        NoteService.addNoteToLocal(makeMailToStr,'red','NoteTxt')
        eventBusService.emit('show-msg',true);
    }

    render() {
        const { mail, clock, deleteMail } = this.props
        return (
            <section className="flex">
                <div className="mail-content flex">
                    <h3>{mail.username}</h3>
                    <h3>{mail.subject} </h3>
                    <span className="user-info">{mail.username} {'<'}{mail.usermail}{'>'}   </span>
                    <p >{mail.body}</p>
                    <span>Sent at {clock}</span>
                    <button className="btn mt-2" onClick={this.addToNotes}>Add To Notes</button>
                </div>
                <div className="del-btn mt-3" onClick={() => deleteMail(mail.id)}>
                    <i className="fas fa-trash" ></i>
                </div>
            </section>
        );
    }
}

