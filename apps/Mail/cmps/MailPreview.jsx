import { MailDetails } from "./MailDetails.jsx";
import { misterEmailService } from '../services/misterEmail-service.js'


export class MailPreview extends React.Component {
    state = {
        mail: this.props.mail,
        isOpen: false
    }
    onToggleMail = () => {
        const { mail } = this.state
        const updatedMail = mail
        updatedMail.isRead = true;
        this.setState({ mail: updatedMail, isOpen: !this.state.isOpen })
        this.props.makeMailReaded(mail.id)
        console.log(updatedMail);

    }

    onDeleteMail = (id) => {
        const { mail } = this.props
        this.props.deleteMail(id)
        this.setState({ mail })
    }
    componentDidMount() {
        const { mail } = this.props
        this.setState({ mail })
    }

    render() {
        const { mail, isOpen } = this.state
        return (
            <article className="mail-preview" >
                <span>
                    <input type="checkbox" name="" id="" />
                    <a>♥ </a>
                    <a>Imp? </a>
                    <span className="mail-title" onClick={this.onToggleMail}>
                        <span>{mail.username} </span>
                        <span className={`subject ${mail.isRead ? 'old-mail' : 'new-mail'}`}>{mail.subject} </span>
                    </span>
                    {isOpen && <MailDetails mail={mail} deleteMail={this.onDeleteMail} />}
                </span>
            </article>
        );
    }
}






// const { Link } = ReactRouterDOM
// export function MailPreview({ mail, deleteMail, toggleMail }) {


//     return <Link to={`/mail/${mail.id}`}>
//         <article className="mail-preview" >
//             <span>
//                 <input type="checkbox" name="" id="" />
//                 <a>♥ </a>
//                 <a>Imp? </a>
//                 <span className="mail-title" onClick={() => toggleMail(mail.id)}>
//                     <span>{mail.username} </span>
//                     <span className={`subject ${mail.isRead ? 'old-mail' : 'new-mail'}`}>{mail.subject} </span>
//                 </span>
//                 {mail.isOpen && <MailDetails mail={mail} deleteMail={deleteMail} />}
//             </span>
//         </article>
//     </Link>
// }