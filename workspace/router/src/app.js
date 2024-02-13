import React, { useState } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import AboutThisSite from './aboutThisSite';
import ContactUs from './contactUs';
import LoginPage from './loginPage';
import User from './user';
import NavBar from './navBar';
import PrivateRoute from './privateRoute';

const App = () =>  {
    const [ isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = (from, navigate) => {
        setIsLoggedIn(true);
        console.log('in handleLogin from', from);
        console.log('in handleLogin navigate', navigate);
        navigate(from, { replace: true });
    }

    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<RootElement />} />
                    <Route
                        path='/about'
                        element={
                            <PrivateRoute suthorized={isLoggedIn}>
                                <AboutThisSite />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/contact'
                        element={
                            <PrivateRoute authorized={isLoggedIn}>
                                <ContactUs />
                            </PrivateRoute>
                        }
                    />

                    <Route path='/login' element={<LoginPage onClick={handleLogin}/>} />
                    <Route path='/user/:username' element={<User />} />
                </Routes>
                <h5>Some Friends Of Mine</h5>
                <ul>
                        <li>
                            <Link to='user/Mary'>Mary</Link>
                        </li>
                        <li>
                            <Link to='user/Justine'>Justine</Link>
                        </li>
                        <li>
                            <Link to='user/Brianna'>Brianna</Link>
                        </li>
                        <li>
                            <Link to='user/David'>David</Link>
                        </li>
                </ul>
            </BrowserRouter>
        </>
    );
};

const RootElement = () => <span></span>;

export default App;