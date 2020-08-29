
// export function MailFilter(props) {

//     return <section className="Mail-filter">
//         <h2>Mail Filter</h2>
//         Mail to search? <input name="txt" type="text" className="title-search" placeholder="Search mail" onChange={(ev) => {
//             props.onSetFilter(ev.target.value, ev.target.name)
//         }} />

//         <div className="btns-container flex">
//             <button className="filter-btn active-filter" name="isRead" value="all" onClick={(ev) => { props.onSetFilter(ev.target.value, ev.target.name) }}>
//                 <i class="fas fa-home mr-2"></i>All Mails</button>
//             <button className="filter-btn" name="isRead" value="unreaded" onClick={(ev) => { props.onSetFilter(ev.target.value, ev.target.name) }}><i class="fas fa-envelope mr-2"></i>Unreaded Mails</button>
//             <button className="filter-btn" name="isRead" value="readed" onClick={(ev) => { props.onSetFilter(ev.target.value, ev.target.name) }}><i class="far fa-envelope-open mr-2"></i>Readed Mails</button>
//         </div>

//     </section>
// }


export class MailFilter extends React.Component {

    state = {
        filterBy: 'all'
    }
    setActive = (value, name) => {
        const { onSetFilter } = this.props
        this.setState({ filterBy: value })
        onSetFilter(value, name)
    }

    render() {
        const { onSetFilter } = this.props
        return (
            <section className="Mail-filter">
                Mail to search? <input name="txt" type="text" className="title-search" placeholder="Search mail" onChange={(ev) => {
                    this.props.onSetFilter(ev.target.value, ev.target.name)
                }} />

                <div className="btns-container flex">
                    <button className={`filter-btn ${this.state.filterBy==='all'?'active-filter':''}`} name="isRead" value="all" onClick={(ev) => this.setActive(ev.target.value, ev.target.name)}>
                        <i className="fas fa-home mr-2"></i>All Mails</button>
                    <button className={`filter-btn ${this.state.filterBy==='unreaded'?'active-filter':''}`} name="isRead" value="unreaded" onClick={(ev) => this.setActive(ev.target.value, ev.target.name)}><i className="fas fa-envelope mr-2"></i>Unreaded Mails</button>
                    <button className={`filter-btn ${this.state.filterBy==='readed'?'active-filter':''}`} name="isRead" value="readed" onClick={(ev) => this.setActive(ev.target.value, ev.target.name)}><i className="far fa-envelope-open mr-2"></i>Readed Mails</button>
                </div>

            </section>
        );
    }
}
