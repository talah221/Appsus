const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import { BookDetails } from './pages/BookDetails.jsx'
import { MissBooks } from './pages/MissBooks.jsx'

export class BookApp extends React.Component {

    render() {
        return (
            <div>
                <Router>
                    <header></header>
                    <main>
                        <AppHeader/>
                        <UserMsg/>
                        <Switch>
                            <Route component={BookDetails} path="/bookApp/:bookId" />
                            <Route component={MissBooks} path="/bookApp" />
                        </Switch>
                    </main>

                </Router>
            </div>
        )
    }
}

