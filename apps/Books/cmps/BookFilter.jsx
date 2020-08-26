
export function BookFilter(props) {

    const elInput = React.createRef()

    return <section className="book-filter">
        <h2>Book Filter</h2>
        Book to search? <input name="name" type="text" className="title-search" placeholder="Filter by title" onChange={(ev) => {
            props.onSetFilter(ev.target.value, ev.target.name)
        }} />

        Price range? <input name="price"
            placeholder="Filter By Price" type="range" min="10" max="200"
            onChange={(ev) => {
                props.onSetFilter(+ev.target.value, ev.target.name)
            }}
        /> <span>{(props.price === Infinity) ? '' : props.price}</span>
    </section>
}