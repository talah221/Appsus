const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import {MisterEmail} from './pages/MisterEmail.jsx'
import {MailDetails} from './pages/MailDetails.jsx'



export class EmailMain extends React.Component {

    render() {
        return (
            <div>
                <Router >
                    <header>

                    </header>
                    <main>
                        <Switch>
                            <Route component={MisterEmail} path="/email" />
                            </Switch>
                    </main>
                </Router>
            </div >
        )
    }
}

