/*********************************
 ******|      Login.js     |******
 *********************************/ 

function Login(props) {

    const {UserID, senha} = props;

    return(
        <section>
        <label>Usuário:</label>
        <input type="text" id="username" />
        <br/>
        <label>Senha:</label>
        <input type="password" id="password" />
        <br/>
        <button onClick={Confirmar}> Confirmar</button>
         
        </section>
    );

    function Confirmar() {
        if (document.getElementById("username").value === props.UserID && document.getElementById("password").value === props.senha) {
            window.alert(`Usuário ${props.UserID} Entrada com sucesso!`)
        }else{
            window.alert(`Usuário ${document.getElementById("username").value} ou senha incorretos.`)
        } 
    }

};

export default Login;
