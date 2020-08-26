const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import { BookDetails } from '../apps/Books/pages/BookDetails.jsx'
// import { MissBooks } from '../apps/Books/pages/MissBooks.jsx'

export class BooksApp extends React.Component {

    render() {
        return (
            <div>
                <Router>
                    <header></header>
                    <main>
                        <Switch>
                            <Route component={BookDetails} path="/book/:bookId" />
                        </Switch>
                    </main>

                </Router>
            </div>
        )
    }
}

