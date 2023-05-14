import { BrowserRouter,Routes, Route} from "react-router-dom";
import Agenda from "./Pages/Agenda";
import Login from "./Pages/Login";
import SobreNos from "./Pages/SobreNos";


function RouterApp() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="" element = {<Login/>}/>
            <Route path="/agenda" element = {<Agenda/>}/>
            <Route path="/sobre" element = {<SobreNos/>}/>
        </Routes>
        
        </BrowserRouter>
    );
}
export default RouterApp;