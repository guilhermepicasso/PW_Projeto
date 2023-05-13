/*********************************
 ******|      Login.js     |******
 *********************************/ 

 import { useNavigate } from 'react-router-dom';

function Login(props) {

    const {UserID, senha} = props;
    
    const nome = "admin"
    const password = "123"
    let pagina = useNavigate();

    return(
        <section>
        <label>Usuário:</label>
        <input type="text" id="username" /><br/>
        <label>Senha:</label>
        <input type="password" id="password" />
        <br/>
        <button onClick={Confirmar}> Confirmar</button>
         
        </section>
    );

    function Confirmar() {
        if (document.getElementById("username").value === nome && document.getElementById("password").value === password) {
            window.alert(`Usuário ${nome} Entrada com sucesso!`)
            pagina('/agenda')
        }else{window.alert(`Usuário ${document.getElementById("username").value} ou senha incorretos.`)
        } 
    }

};

export default Login;
