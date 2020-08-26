
import { MailPreview } from "./MailPreview.jsx";

export function MailsList({ mails, deleteMail }) {
    return (
        <ul className="mail-list">
            {mails.map((mail, idx) =>
                <li className="mail-line" key={idx}>
                    <MailPreview mail={mail} deleteMail={deleteMail} />
                </li>)
            }
        </ul>
    )
}

