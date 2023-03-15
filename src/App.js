import logo from './logo.svg';
import './App.scss';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Login } from './Login';
import { ErrorPage } from './ErrorPage';
import { Home } from './Home';
import { PageLayout } from './components/PageLayout';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <PageLayout>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                            </ul>
                        </nav>
                        <Routes>
                            <Route path="/" element={<Home></Home>}></Route>
                            <Route
                                path="/login"
                                element={<Login></Login>}
                            ></Route>
                        </Routes>
                    </PageLayout>
                </header>
            </div>
        </>
    );
}

export default App;
