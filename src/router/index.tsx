import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import Home from '../views/home/index';
import SideBar from '../components/sidebar/Sidebar';
import { routes } from '../components/sidebar/routes';

const AppNavigation = () => {
    const isAuthenticated = true
    return <BrowserRouter>
                <Routes>
                    <Route index element={
                        <ProtectedRoute isAuthenticated={false}>
                            <SideBar>
                                <Home />
                            </SideBar>
                        </ProtectedRoute>} />
                    {
                        routes.map(({path, screen}, idx)=> <Route
                            key={idx}
                            path={path}
                            element={
                                <ProtectedRoute isAuthenticated={isAuthenticated}>
                                    <SideBar>
                                        {screen ? screen : <Home />}
                                    </SideBar>
                                </ProtectedRoute>
                            }
                            /> )
                    }      
                </Routes>
            </BrowserRouter>
};

export default AppNavigation;
