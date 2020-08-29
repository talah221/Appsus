

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



export function MailDetails({ mail, clock,deleteMail }) {
    return (
        <section className="flex">
            <div className="mail-content flex">
                <h3>{mail.username}</h3>
                <h3>{mail.subject} </h3>
                <span className="user-info">{mail.username} {'<'}{mail.usermail}{'>'}   </span>
                <p >{mail.body}</p>
                <span>Sent at {clock}</span>
            </div>
            <div className="del-btn mt-3" onClick={() => deleteMail(mail.id)}>
                <i className="fas fa-trash" ></i>
            </div>
        </section>
    );
}
