const Router = ReactRouterDOM.HashRouter
const { Route } = ReactRouterDOM
import { MisterEmail } from '../apps/Mail/pages/MisterEmail.jsx'
// import {MailPreview} from '../apps/Mail/cmps/MailPreview.jsx'

export class EmailApp extends React.Component {

    render() {
        return (
            <div>
                <Router>
                    <header></header>
                    <main>
                            <Route component={MisterEmail} path="/email" />
                            {/* <Route component={MailPreview} path="/email/:id" /> */}
                    </main>

                </Router>
            </div>
        )
    }
}

