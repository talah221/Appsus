

export class MailDetails extends React.Component {

    state = {

    }
    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {

    }




    render() {
        const {mail} = this.props
        return (
            <section>
                <h3>{mail.subject} </h3>
                <span>{mail.username} {'<'}{mail.usermail}{'>'}   </span>
                <p >{mail.body}</p>
                <div className="del-btn" onClick={() => this.props.deleteMail(mail.id)}>
                    <i className="fas fa-trash" ></i>
                </div>
            </section>
        );
    }
}
