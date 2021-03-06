const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM


import { misterEmailService } from '../services/misterEmail-service.js'
import { MailsList } from '../cmps/MailsList.jsx'
import { MailStatus } from '../cmps/MailStatus.jsx'
import { MailFilter } from '../cmps/MailFilter.jsx'
import { MailCompose } from '../cmps/MailCompose.jsx'
import { MailController } from '../cmps/MailController.jsx'

export class MisterEmail extends React.Component {
    state = {
        filterBy: { txt: '', isRead: 'all' },
        mails: null,
        percentage: 0,
        isComposing: false,
        anyChecked: false,
        checkedMails: null
    }

    componentDidMount() {
        this.loadMails()
        this.setEmailStatus()

    }

    loadMails = () => {
        misterEmailService.query(this.state.filterBy)
            .then(mails => {
                this.setState({ mails })

            })
    }
    onSetFilter = (value, name) => {
        console.log(value);
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

    toggleCheck = (mailId) => {
        misterEmailService.toggleCheck(mailId)
        this.loadMails()
        let mailsChecked = this.state.mails.find(mail => mail.isChecked)
        mailsChecked = mailsChecked ? this.setState({ anyChecked: true }) : this.setState({ anyChecked: false })
        this.setCheckedMails()

    }

    setCheckedMails = () => {
        const { mails } = this.state
        const checkedMails = mails.filter(mail => mail.isChecked)
        this.setState({ checkedMails })
        console.log(checkedMails);
    }

    onDeleteChecked = () => {
        misterEmailService.deleteChecked(this.state.checkedMails)
        this.loadMails()
        this.setEmailStatus()
    }

    onToggleMark = (ev) => {
        misterEmailService.toggleMark(this.state.checkedMails, ev.target.value)
        this.loadMails()
        this.setEmailStatus()
    }


    render() {
        const { mails, percentage, isComposing, anyChecked, checkedMails } = this.state


        return (
            <section className="mails-container flex">
                <div className="button-wrapper"><button className="compose-btn" onClick={this.toggleCompose}><i className="fas fa-plus mr-1 red" ></i>Compose</button></div>
                <div className="editor-container flex">
                    <MailFilter onSetFilter={this.onSetFilter} />
                </div>
                {anyChecked && < MailController deleteMails={this.onDeleteChecked} toggleMark={this.onToggleMark} />}
                <div>{isComposing && < MailCompose loadMails={this.loadMails} toggleCompose={this.toggleCompose} />}</div>
                { mails && mails.length > 0 && <MailsList toggleCheck={this.toggleCheck} mails={mails} deleteMail={this.onDeleteMail} makeMailReaded={this.makeMailReaded} />}
                {mails && <MailStatus percentage={percentage.toFixed(1)} />}
            </section>
        )
    }
}
