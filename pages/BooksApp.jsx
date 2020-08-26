const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
// import { BookDetails } from './pages/BookDetails.jsx'
// import { Home } from './pages/Home.jsx'
// import { About } from './pages/About.jsx'
// import { BookApp } from './pages/BookApp.jsx'
// import {AppHeader} from './cmps/AppHeader.jsx'
// import {UserMsg} from './cmps/UserMsg.jsx'

export class BooksApp extends React.Component {

    render() {
        return (
            <div>
                <h1>BooksApp</h1>
                {/* <Router>
                    <header></header>
                    <main>
                        <AppHeader/>
                        <UserMsg/>
                        <Switch>
                            <Route component={BookDetails} path="/book/:bookId" />
                            <Route component={BookApp} path="/book" />
                            <Route component={About} path="/about" />
                            <Route component={Home} path="/" />
                        </Switch>
                    </main>

                </Router> */}
            </div>
        )
    }
}

