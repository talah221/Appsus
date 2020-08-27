const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM


import { misterEmailService } from '../services/misterEmail-service.js'
import { MailsList } from '../cmps/MailsList.jsx'
import { MailStatus } from '../cmps/MailStatus.jsx'
import { MailFilter } from '../cmps/MailFilter.jsx'
import { MailCompose } from '../cmps/MailCompose.jsx'

export class MisterEmail extends React.Component {
    state = {
        filterBy: { txt: '', isRead: 'all' },
        mails: null,
        percentage: 0
    }

    componentDidMount() {
        this.loadMails()

    }

    loadMails = () => {
        misterEmailService.query(this.state.filterBy)
            .then(mails => {
                this.setState({ mails })

            })
    }
    onSetFilter = (value, name) => {
        this.setState({ filterBy: { ...this.state.filterBy, [name]: value } }, this.loadMails)

        // this.props.history.push(`/book?filterBy=${value}`)

    }

    onDeleteMail = (mailId) => {
        misterEmailService.mailDelete(mailId)
        this.loadMails()

    }
    setEmailStatus = () => {
        const percentage = misterEmailService.caculateReadedMails()
        this.setState({ percentage })

    }

    makeMailReaded = (mailId) => {
        misterEmailService.makeMailReaded(mailId)
        this.loadMails()
        this.setEmailStatus()

    }
    render() {
        const { mails, percentage } = this.state

        return (
            <section className="mails-container">
                <MailCompose />
                <MailFilter onSetFilter={this.onSetFilter} />
                {mails && mails.length > 0 && <MailsList mails={mails} deleteMail={this.onDeleteMail} makeMailReaded={this.makeMailReaded} />}
                {mails && <MailStatus percentage={percentage} />}
            </section>
        )
    }
}
