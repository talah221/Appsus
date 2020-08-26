
export class EmailStatus extends React.Component {
    state = {
        mails: null,
        readedMails: 0
    }

    getReadedMails = () => {
        const mailsNum = this.state.mails.length;
        const readedMails = this.state.mails.filter(mail => !mail.isRead);


    }

    componentDidMount() {
        const { mails } = this.props
        this.setState({ mails })
    }



    render() {
        return (
            <div>
                s
            </div>
        );
    }
}
