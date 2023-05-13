import { BrowserRouter,Routes, Route} from "react-router-dom";
import Header from './components/Header/header';
import  Home  from "./Pages/Home";
import Agenda from "./Pages/Agenda";
import Login from "./Pages/Login";
import SobreNos from "./Pages/SobreNos";


function RouterApp() {
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/home" element = {<Home/>}/>
            <Route path="" element = {<Login/>}/>
            <Route path="/agenda" element = {<Agenda/>}/>
            <Route path="/sobre" element = {<SobreNos/>}/>
        </Routes>
        
        </BrowserRouter>
    );
}
export default RouterApp;