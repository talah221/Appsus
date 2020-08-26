const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM


import { misterEmailService } from '../services/misterEmail-service.js'
import { MailsList } from '../cmps/MailsList.jsx'
import { EmailStatus } from '../cmps/EmailStatus.jsx'

export class MisterEmail extends React.Component {
    state = {
        filterBy: '',
        mails: null
    }

    componentDidMount() {
        this.loadMails()

    }

    loadMails = () => {
        misterEmailService.query(this.state.filterBy).then(mails => {
            this.setState({ mails })

        })
    }
    onSetFilter = (params) => {


    }

    onDeleteMail = (mailId) => {
        misterEmailService.mailDelete(mailId)
        this.loadMails()

    }


    render() {
        const { mails } = this.state

        return (
            <section className="mails-container">
                {mails && <MailsList mails={mails} deleteMail={this.onDeleteMail} />}
                {mails && <EmailStatus mails={mails} />}
            </section>
        )
    }
}
