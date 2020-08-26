export const misterEmailService = {
    query,
    mailDelete
}
const mails = [{ id: 1, username: 'Elon Mask', usermail: 'ElonMask@tesla.com', subject: 'Partnership', body: 'Hey mate, wanna be my partner?', isRead: false, isOpen: false, sentAt: 1551133930594 },
{ id: 2, username: 'Warren Buffet', usermail: 'WarrenBuffet@BerkshireHathaway.com', subject: 'My Will', body: 'Hey Tal, i\'de like to give you all my property.', isOpen: false, isRead: false, sentAt: 1551130930594 },]


function query(filterBy) {
    let mailsToReturn;
    if (filterBy) {
        //TODO:filter mails and return them.
        mailsToReturn = mails
    } else mailsToReturn = mails
    // storageService.saveToStorage('books', booksToReturn)
    return Promise.resolve(mailsToReturn)
}

function mailDelete(id) {
    const mailToDeleteIdx = mails.findIndex(mail => mail.id === id)
    mails.splice(mailToDeleteIdx, 1)

}