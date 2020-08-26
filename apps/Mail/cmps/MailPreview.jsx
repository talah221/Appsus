import { MailDetails } from "./MailDetails.jsx";
import { misterEmailService } from '../services/misterEmail-service.js'


export class MailPreview extends React.Component {
    state = {
        mail: null,
        isOpen: false
    }
    toggleMail = () => {
        const { mail } = this.state
        const updatedMail = mail
        updatedMail.isRead = true;
        updatedMail.isOpen = !mail.isOpen
        this.setState({ mail: updatedMail })
        // this.setState({ ...mail, isRead: true })
    }



    onDeleteMail = (id) => {
        this.props.deleteMail(id)
        // misterEmailService.deleteMail(id)
    }

    componentDidMount() {
        this.setState({ mail: this.props.mail })
    }
    // { id: 2, username: 'Warren Buffet', usermail: 'WarrenBuffet@BerkshireHathaway.com', 
    // subject: 'My Will', body: 'Hey Tal, i\'de like to give you all my property.',
    //  isOpen: false, isRead: false, sentAt: 1551130930594 },]


    render() {
        const { mail } = this.props
        return (
            <article className="mail-preview" >
                <span>
                    <input type="checkbox" name="" id="" />
                    <a>♥ </a>
                    <a>Imp? </a>
                    <span className="mail-title" onClick={this.toggleMail}>
                        <span>{mail.username} </span>
                        <span className={`subject ${mail.isRead ? 'old-mail' : 'new-mail'}`}>{mail.subject} </span>
                    </span>
                    {mail.isOpen && <MailDetails mail={mail} deleteMail={this.onDeleteMail} />}
                </span>
            </article>
        );
    }
}

