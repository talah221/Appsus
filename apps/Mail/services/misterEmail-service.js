export const misterEmailService = {
    query,
    mailDelete,
    makeMailReaded,
    caculateReadedMails
}
const mails = [{
    id: 2, username: 'Warren Buffet', usermail: 'WarrenBuffet@BerkshireHathaway.com',
    subject: 'Will', body: 'Hey Tal, I\'d like to give you all my property.',
    isRead: false, sentAt: 1551130930594
},
{
    id: 3, username: 'Zoom', usermail: 'no-reply@zoom.us',
    subject: 'Personal meeting room update', body: 'Tal Sasson has joined your Personal Meeting room',
    isRead: false, sentAt: 1552130930594
}
]


function query(filterBy) {
    let status;
    let mailsToReturn = []
    if (filterBy.isRead === 'readed') status = true;
    else if (filterBy.isRead === 'unreaded') status = false
    else if (filterBy.isRead === 'all') {
        console.log('im here');
        

    }
    if (filterBy) {
        // mailsToReturn = mails.filter(mail => mail.body.toLowerCase().includes(filterBy.txt.toLowerCase()))
        for (var i = 0; i < mails.length; i++) {
            if (mails[i].body.toLowerCase().includes(filterBy.txt.toLowerCase())) {
                mailsToReturn.push(mails[i])
            }
        }
        mailsToReturn =  (filterBy.isRead === 'all')? mailsToReturn :mailsToReturn.filter(mail => { return mail.isRead === status })
    }
    else {
        mailsToReturn = mails

    }
    // storageService.saveToStorage('mails', mailsToReturn)
    return Promise.resolve(mailsToReturn)
}

function mailDelete(id) {
    const mailToDeleteIdx = mails.findIndex(mail => mail.id === id)
    mails.splice(mailToDeleteIdx, 1)

}

function makeMailReaded(id) {
    const mailToEdit = mails.findIndex(mail => mail.id === id)
    mails[mailToEdit].isRead = true
}

function caculateReadedMails() {
    const numOfMails = mails.length;
    const readedMails = mails.filter(mail => mail.isRead)
    return (readedMails.length / numOfMails) * 100
}