const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import { AppHeader } from './cmps/AppHeader.jsx'
import { UserMsg } from './cmps/UserMsg.jsx'
import {Home} from './pages/Home.jsx'
import {About} from './pages/About.jsx'
import {EmailApp} from './pages/EmailApp.jsx'
import {NotesApp} from './pages/NotesApp.jsx'
import {BooksApp} from './pages/BooksApp.jsx'



export class App extends React.Component {

    render() {
        return (
            <div>
                <Router >
                    <header>
                        <AppHeader />
                        <UserMsg />
                    </header>
                    <main>
                        <Switch>
                            <Route component={BooksApp} path="/book" />
                            <Route component={NotesApp} path="/note" />
                            <Route component={EmailApp} path="/email" />
                            <Route component={About} path="/about" />
                            <Route component={Home} path="/" />
                        </Switch>
                    </main>
                </Router>
            </div >
        )
    }
}

