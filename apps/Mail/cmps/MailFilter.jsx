
export function MailFilter(props) {

    return <section className="Mail-filter">
        <h2>Mail Filter</h2>
        Mail to search? <input name="txt" type="text" className="title-search" placeholder="Search mail" onChange={(ev) => {
            props.onSetFilter(ev.target.value, ev.target.name)
        }} />

        Mails to display?
        <select name="isRead" onChange={(ev) => { props.onSetFilter(ev.target.value, ev.target.name) }}>
            <option value="all">All Mails</option>
            <option value="unreaded">Unreaded Mails</option>
            <option value="readed">Readed mails</option>
        </select>

    </section>
}