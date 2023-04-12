import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Main from './pages/Main/Main';
import Logout from './pages/Logout';
import { QueryClient, QueryClientProvider } from 'react-query';
import MainDetailList from './pages/MainDetailList/MainDetailList';
import MainUpdateList from './pages/MainUpdateList/MainUpdateList';
import MainCreateList from './pages/MainCerateList/MineCreateList';
import MainCreateTodo from './pages/MainCreateTodo/MainCreateTodo';
import MainUpdateTodo from './pages/MainUpdateTodo/MainUpdateTodo';
import Settings from './pages/MainSettings/Settings';
import GoogleRedirect from './pages/googleRedirect/googleRedirect';

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path={'/auth/login'} element={<Login />} />
                <Route path={'/logout'} element={<Logout />} />
                <Route path={'/auth/register'} element={<Register />} />
                <Route path={'/main/:idUser'} element={<Main />}></Route>
                <Route path={'/main/:idUser/:idList'} element={<MainDetailList />}></Route>
                <Route
                    path={'/main/:idUser/:idList/listUpdate'}
                    element={<MainUpdateList />}
                ></Route>
                <Route path={'/main/:idUser/createList'} element={<MainCreateList />}></Route>
                <Route
                    path={'/main/:idUser/:idList/createTodo'}
                    element={<MainCreateTodo />}
                ></Route>
                <Route path={'/main/:idUser/:idList/deleteList'}></Route>
                <Route
                    path={'/main/:idUser/:idList/updateTodo/:idTodo'}
                    element={<MainUpdateTodo></MainUpdateTodo>}
                ></Route>
                <Route path={'/main/:idUser/settings'} element={<Settings></Settings>}></Route>
                <Route
                    path={'/googleRedirect/:idUser'}
                    element={<GoogleRedirect></GoogleRedirect>}
                ></Route>
            </Routes>
        </QueryClientProvider>
    );
}
export default App;
