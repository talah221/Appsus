import { MailDetails } from "./MailDetails.jsx";
import { misterEmailService } from '../services/misterEmail-service.js'


export class MailPreview extends React.Component {
    state = {
        mail: this.props.mail,
        isOpen: false,
    }
    onToggleMail = () => {
        const { mail } = this.state
        const updatedMail = mail
        updatedMail.isRead = true;
        this.setState({ mail: updatedMail, isOpen: !this.state.isOpen })
        this.props.makeMailReaded(mail.id)

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
    toggleFavorites = (ev) => {
        ev.stopPropagation()
        this.setState({ isFavorite: !this.state.isFavorite })
        console.log(this.state.isFavorite);
    }

    onToggleCheck = (ev) => {
        ev.stopPropagation()

    }

    getFormattedMinutes = () => {
        const { mail } = this.state
        const timestamp = new Date(mail.sentAt)
        return timestamp.getMinutes()
    }

    getFormattedHours = () => {
        const { mail } = this.state
        const timestamp = new Date(mail.sentAt)
        return timestamp.getHours()
    }
    render() {
        const { mail, isOpen, isFavorite } = this.state
        return (
            <article className={`mail-preview ${mail.isRead ? 'old-mail' : 'new-mail'}`} onClick={this.onToggleMail} >
                <span>
                    <input type="checkbox" onClick={this.checkMail} name="" id="" />
                    <span onClick={this.toggleFavorites} className={`${isFavorite ? 'full-star' : 'star'}`}>.  .  </span>
                    {/* <a onClick={this.toggleFavorites}><i className={`${isFavorite ? 'fas' : 'far'} fa-star`}></i> </a> */}
                    <span className="mail-title" >
                        <span className="mail-title-username">{mail.username} </span>
                        <span className={`mail-title-subject ${mail.isRead ? 'old-mail' : 'new-mail'}`}>{mail.subject} </span>
                        <span className="created-at">{this.getFormattedHours()}:{this.getFormattedMinutes()}</span>
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