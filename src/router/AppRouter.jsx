import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import ErrorPage from '../pages/ErrorPage';
import UserDetailsPage from '../pages/UserDetailsPage';
import Users from '../components/users/Users';
import TestE2E from '../pages/TestE2EPage';
import UsersForTest from '../components/usersForTest/UsersForTest';

const AppRouter = () => {
    return (
        <Routes>
            <Route
                path={'/'}
                element={<MainPage />}
            />
            <Route
                path={'/teste2e'}
                element={<TestE2E />}
            />
            <Route
                path={'/about'}
                element={<AboutPage />}
            />
            <Route
                path={'/users'}
                element={<Users />}
            />
            <Route
                path={'/users/:id'}
                element={<UserDetailsPage />}
            />
            <Route
                path={'/users-test'}
                element={<UsersForTest />}
            />
            <Route
                path={'/*'}
                element={<ErrorPage />}
            />
        </Routes>
    );
};

export default AppRouter;
