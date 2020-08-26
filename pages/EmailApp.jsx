const Router = ReactRouterDOM.HashRouter
const { Route } = ReactRouterDOM
import { MisterEmail } from '../apps/Mail/pages/MisterEmail.jsx'

export class EmailApp extends React.Component {

    render() {
        return (
            <div>
                <Router>
                    <header></header>
                    <main>
                            <Route component={MisterEmail} path="/email" />
                    </main>

                </Router>
            </div>
        )
    }
}

