import { MailDetails } from "./MailDetails.jsx";
import { misterEmailService } from '../services/misterEmail-service.js'
import { HoverController } from "./HoverController.jsx";


export class MailPreview extends React.Component {
    state = {
        mail: this.props.mail,
        isOpen: false,
        clockStr: '',
        isHover: false
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
        this.makeClock()
    }
    toggleFavorites = (ev) => {
        ev.stopPropagation()
        this.setState({ isFavorite: !this.state.isFavorite })
        console.log(this.state.isFavorite);
    }

    onToggleCheck = (ev) => {
        const { mail } = this.props
        ev.stopPropagation()
        this.props.toggleCheck(mail.id)

    }


    makeClock = () => {
        const { mail } = this.state
        const hours = new Date(mail.sentAt).getHours()
        const minutes = new Date(mail.sentAt).getMinutes()
        const clockStr = `${hours}:${minutes}`
        this.setState({ clockStr })
    }
    toggleHover = () => {
        this.setState({ isHover: !this.state.isHover })
    }




    
    render() {
        const { mail, isOpen, isFavorite, clockStr, isHover } = this.state
        return (
            <article onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} className={`mail-preview ${mail.isRead ? 'old-mail' : 'new-mail'}`} onClick={this.onToggleMail} >
                <span>
                    <input type="checkbox" onClick={this.onToggleCheck} name="" id="" />
                    <span  //onClick={this.toggleFavorites}//
                    >

                        {!isFavorite && <i className="far fa-star mr-1"></i>}
                    </span>
                    {/* 
                    <span onClick={this.toggleFavorites}>
                        {isFavorite && <i className="fas fa-star"></i>}

                    </span> */}
                    {/* <a onClick={this.toggleFavorites}><i className={`${isFavorite ? 'fas' : 'far'} fa-star`}></i> </a> */}
                    {!isOpen && <span className="mail-title" >
                        <span className="mail-title-username">{mail.username} </span>
                        <span className={`mail-title-subject ${mail.isRead ? 'old-mail' : 'new-mail'}`}>{mail.subject} </span>
                        <span className="created-at">{clockStr}</span>
                    </span>}
                    {isOpen && <MailDetails mail={mail} deleteMail={this.onDeleteMail} clock={clockStr} />}
                </span>
                    {/* {isHover && <HoverController deleteMail={this.onDeleteMail} mail={mail} />} */}
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