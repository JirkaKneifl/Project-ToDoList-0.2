import './App.css';
import { Route ,Routes} from "react-router-dom";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Main from "./pages/Main/Main"
import Logout from "./pages/Logout";
import {QueryClient , QueryClientProvider} from "react-query";
import MainDetailList from "./pages/MainDetailList/MainDetailList";
import MainUpdateList from "./pages/MainUpdateList/MainUpdateList";
import MainCreateList from "./pages/MainCerateList/MineCreateList";

function App() {
    const queryClient = new QueryClient();

    return(
      <QueryClientProvider client={queryClient}>
        <Routes>
            <Route path="/" element={<About />}/>
            <Route path={"/login"} element={<Login />}/>
            <Route path={"/logout"} element={<Logout />}/>
            <Route path={"/register"} element={<Register />}/>
            <Route path={"/main"} element={<Main />}></Route>
            <Route path={"/main/:idList"} element={<MainDetailList/>}></Route>
            <Route path={"/main/:idList/listUpdate"} element={<MainUpdateList/>}></Route>
            <Route path={"/main/createList"} element={<MainCreateList/>}></Route>
        </Routes>
      </QueryClientProvider>
)


}
export default App;
