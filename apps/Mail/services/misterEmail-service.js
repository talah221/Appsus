export const misterEmailService = {
    query,
    mailDelete,
    makeMailReaded,
    caculateReadedMails,
    addMail
}
var gId = 15;
const mails = [

    {
        id: 1, username: 'Apple', usermail: 'no-reply@apple.com',
        subject: 'Reciept: Apple Music', body: 'Hey Tal, Here is your monthly reciept for Apple Music Subscription',
        isRead: false, sentAt: 1550130930594
    },
    {
        id: 2, username: 'Warren Buffet', usermail: 'WarrenBuffet@BerkshireHathaway.com',
        subject: 'Will', body: 'Hey Tal, I\'d like to give you all my property.',
        isRead: false, sentAt: 1551130940594
    },
    {
        id: 3, username: 'AliExpress', usermail: 'transaction@notice.aliexpress.com',
        subject: 'Order 801692 has been sent!', body: 'Your payment was successful! Hi Tal Lahyani, The payment for order 8016929120701094 has been confirmed! We\'ll let you know when your order ships. You can also sign in to AliExpress to see more details.',
        isRead: false, sentAt: 1551530930594
    },
    {
        id: 4, username: 'Zoom', usermail: 'no-reply@zoom.us',
        subject: 'Personal meeting room update', body: 'Tal Sasson has joined your Personal Meeting room',
        isRead: false, sentAt: 1552130910594
    },
    {
        id: 5, username: 'ASOS Sale', usermail: 'asos@fashion.asos.com',
        subject: 'Extra 20% off sale stuff 🤩', body: 'Double discount, super sale, two times the treat – whatever you want to call it, this is an amazing deal! For a limited time, take an extra 20% off summer styles that are already up to 70% off. Just in case you needed another reason to refresh your wardrobUse code: ASOSSALEWOWZA',
        isRead: false, sentAt: 1251130930594
    },


]

function query(filterBy) {
    let status;
    let mailsToReturn;
    if (filterBy.isRead === 'readed') status = true;
    else if (filterBy.isRead === 'unreaded') status = false

    if (filterBy) {
        mailsToReturn = mails.filter(mail => mail.body.toLowerCase().includes(filterBy.txt.toLowerCase()))
        mailsToReturn = (filterBy.isRead === 'all') ? mailsToReturn :
            mailsToReturn.filter(mail => { return mail.isRead === status })
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

function addMail(subject, body) {
    gId++
    mails.push({
        id: gId, usermail: 'Tal@Gmail.com', subject, body, isRead: false, sentAt: Date.now()

    })
}

// {
//     id: 1, username: 'Apple', usermail: 'no-reply@apple.com',
//     subject: 'Reciept: Apple Music', body: 'Hey Tal, Here is your monthly reciept for Apple Music Subscription',
//     isRead: false, sentAt: 1551130930594
// },