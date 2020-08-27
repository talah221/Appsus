
export function MailController({ deleteMails, toggleMark }) {
    return (
        <div>
            <button onClick={deleteMails}>Delete</button>
            <button value="unread" onClick={toggleMark}>Mark as Unreaded</button>
            <button value="read" onClick={toggleMark}>Mark as read</button>
            {/* <button value="uncheck" onClick={toggleMark}>Uncheck all</button> */}
        </div>
    );
}
