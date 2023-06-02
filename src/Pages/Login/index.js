/*********************************
 ******|      Login.js     |******
 *********************************/ 

import { useNavigate , Link } from 'react-router-dom';
import './login.css'

function Login(props) {
    const nome = "admin"
    const password = "123"
    const email = "admin@gmail.com";
    let pagina = useNavigate();

    return (
        <section class="login-body">
            <h1 class = "login-titulo">CapNotion</h1>
            <div class="login-section">
                <label class="login-label">Usuário/email:</label>
                <input class="login-input" type="text" id="username" />
                <br/>
                <label class="login-label">Senha:</label>
                <input class="login-input" type="password" id="password" />
                <br/>
                <button class="login-button" onClick={Confirmar}>Confirmar</button>
                <br/>
                <Link to="/cadastro">Não tenho conta</Link>
            </div>
        </section>
    );

    function Confirmar() {
        if ((document.getElementById("username").value === nome || document.getElementById("username").value === email) 
        && document.getElementById("password").value === password) {
            window.alert(`Usuário ${nome} Entrada com sucesso!`)
            pagina('/agenda')
        } else {
            window.alert(`Usuário ${document.getElementById("username").value} /email ou senha incorretos.`)
        } 
    }
};

export default Login;
