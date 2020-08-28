export const misterEmailService = {
    query,
    mailDelete,
    makeMailReaded,
    caculateReadedMails,
    addMail,
    toggleCheck,
    deleteChecked,
    toggleMark,
}
var gId = 15;
const mails = [

    {
        id: 1, username: 'Apple', usermail: 'no-reply@apple.com',
        subject: 'Reciept: Apple Music', body: 'Hey Tal, Here is your monthly reciept for Apple Music Subscription',
        isRead: false, sentAt: 1550130930594, isChecked: false
    },
    {
        id: 2, username: 'Warren Buffet', usermail: 'WarrenBuffet@BerkshireHathaway.com',
        subject: 'Will', body: 'Hey Tal, I\'d like to give you all my property.',
        isRead: false, sentAt: 1551130940594, isChecked: false
    },
    {
        id: 3, username: 'AliExpress', isChecked: false, usermail: 'transaction@notice.aliexpress.com',
        subject: 'Order 801692 has been sent!', body: 'Your payment was successful! Hi Tal Lahyani, The payment for order 8016929120701094 has been confirmed! We\'ll let you know when your order ships. You can also sign in to AliExpress to see more details.',
        isRead: true, sentAt: 1551530930594
    },
    {
        id: 4, username: 'Zoom', isChecked: false, usermail: 'no-reply@zoom.us',
        subject: 'Personal meeting room update', body: 'Tal Sasson has joined your Personal Meeting room',
        isRead: false, sentAt: 1552130910594, isChecked: false
    },
    {
        id: 5, username: 'ASOS Sale', isChecked: false, usermail: 'asos@fashion.asos.com',
        subject: 'Extra 20% off sale stuff 🤩', body: 'Double discount, super sale, two times the treat – whatever you want to call it, this is an amazing deal! For a limited time, take an extra 20% off summer styles that are already up to 70% off. Just in case you needed another reason to refresh your wardrobUse code: ASOSSALEWOWZA',
        isRead: false, sentAt: 1251130930594, isChecked: false
    }, {
        id: 6, username: 'Renuar Sale', isChecked: false, usermail: 'renuar@fashion.com',
        subject: '80% SALE All Categories for Rosh Hashana!', body: 'In honor of Rosh Hashanah, we are going on a crazy sale, so go ahead and realize the sale and you are welcome to the site at any given moment.. Just in case you needed another reason to refresh your wardrobUse code: HARTA-BARTA',
        isRead: true, sentAt: 1051130930594, isChecked: false
    }, {
        id: 7, username: 'Pornhub', isChecked: false, usermail: 'customerservice@pornhub.com',
        subject: 'Your membership is about to end', body: 'Hello tal, your Premium Pornhub membership subscription is about to end in 2 days, so if you want to keep watching HD Videos please Renew your membership at harta-mail@pornhub.com',
        isRead: false, sentAt: 1251130930594
    }, {
        id: 8, username: 'Daniel Dresner - Coding Academy', isChecked: false, usermail: 'daniel-dresner@gmail.com',
        subject: 'bye-bentaim', body: 'bye-bentaim',
        isRead: false, sentAt: 1251210930594
    }, {
        id: 9, username: 'Nevo - Coding Academy', isChecked: false, usermail: 'nevo@coding-academy.com',
        subject: 'Your git folder is on dropbox!', body: 'Hello Student12, this mail has sent with bot that I\'ve builded, and its meant to say that on my way to kill you.',
        isRead: true, sentAt: 1241130930594
    }, {
        id: 10, username: 'Alon Dai - Coding Academy', isChecked: false, usermail: 'alondai@coding-academy.com',
        subject: 'Sprint 5', body: 'Hello student, im attaching the Sprint-5 pdf that you need to deliver in the dropbox on three diffrent folders, good luck and may god be with you.',
        isRead: true, sentAt: 1241130930594
    }, {
        id: 11, username: 'Meital Lazarovich - Coding Academy', isChecked: false, usermail: 'meital@coding-academy.com',
        subject: 'Come to the open room!!!', body: 'Come to the open room im so bored',
        isRead: true, sentAt: 1251130930594
    }, {
        id: 12, username: 'Linkedin', isChecked: false, usermail: 'linkedin@linkedin.com',
        subject: 'Yaron Biton has viewed your profile on linkedin', body: 'Yaron Biton has viewed your profile on linkedin',
        isRead: true, sentAt: 1251130930595
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
function toggleCheck(id) {
    const mailToCheckIdx = mails.findIndex(mail => mail.id === id)
    mails[mailToCheckIdx].isChecked = !mails[mailToCheckIdx].isChecked

}

function deleteChecked(arrToDel) {
    arrToDel.forEach(mailToDel => {
        const mailToDelIdx = mails.findIndex(mail => mail.id === mailToDel.id)
        mails[mailToDelIdx].isChecked=false
        mails.splice(mailToDelIdx, 1)

    })
}

function toggleMark(arrToMark, val) {
    const status = (val === 'read') ? true : false
    // if (val === 'read') status = true;
    // else if (val === 'unread') status = false;
    // else if (val === 'uncheck') {
    //     arrToMark.forEach(mailToMark => {
    //         let mailToMarkIdx = mails.findIndex(mail => mail.id === mailToMark.id)
    //         mails[mailToMarkIdx].isChecked = false
    //         return;

    //     })
    // }
    arrToMark.forEach(mailToMark => {
        const mailToMarkIdx = mails.findIndex(mail => mail.id === mailToMark.id)
        mails[mailToMarkIdx].isRead = status

    })

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