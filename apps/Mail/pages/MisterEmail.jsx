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
        percentage: 0,
        isComposing: false
    }

    componentDidMount() {
        this.loadMails()

    }

    loadMails = () => {
        misterEmailService.query(this.state.filterBy)
            .then(mails => {
                this.setState({ mails })

            })
        console.log('loading-mails');
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

    toggleCompose = () => {
        this.setState({ isComposing: !this.state.isComposing })
    }
    render() {
        const { mails, percentage, isComposing } = this.state

        return (
            <section className="mails-container">
                <div className="editor-container">
                    <div><button onClick={this.toggleCompose}>Compose</button></div>
                    <div>{isComposing && < MailCompose loadMails={this.loadMails} />}</div>
                    <MailFilter onSetFilter={this.onSetFilter} />
                </div>
                {mails && mails.length > 0 && <MailsList mails={mails} deleteMail={this.onDeleteMail} makeMailReaded={this.makeMailReaded} />}
                {mails && <MailStatus percentage={percentage} />}
            </section>
        )
    }
}
