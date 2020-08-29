
export function HoverController({deleteMail,mail}) {
    return (
        <span className="del-btn " onClick={(ev) => {
            ev.stopPropagation()
            deleteMail(mail.id)}}>
            <i className="fas fa-trash" ></i>
        </span>
    );
}
