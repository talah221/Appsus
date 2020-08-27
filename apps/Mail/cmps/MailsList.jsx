
import { MailPreview } from "./MailPreview.jsx";

export function MailsList({ mails, deleteMail, makeMailReaded,toggleCheck }) {
    return (
        <ul className="mail-list">
            {mails.map(mail =>
                <li className="mail-line" key={mail.id}>
                    {mail && < MailPreview mail={mail} deleteMail={deleteMail} makeMailReaded={makeMailReaded} toggleCheck={toggleCheck} />}
                </li>)
            }
        </ul>
    )
}

