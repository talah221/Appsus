
const { NavLink } = ReactRouterDOM
export function NavBar() {

    return (<section className="nav-bar">
        <NavLink exact to="/">Homepage</NavLink>
        <NavLink to="/about">AboutPage</NavLink>
        <NavLink to="/book">Book App</NavLink>
        <NavLink to="/note">Notes App</NavLink>
        <NavLink to="/email">Email App</NavLink>
    </section>)
}