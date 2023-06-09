/*********************************
 ******|      Login.js     |******
 *********************************/ 

 import { useNavigate } from 'react-router-dom';
 
 
 function Login(props) {
     const nome = "admin"
     const password = "123"
     let pagina = useNavigate();
 
     return (
         <section class="login-body">
             
             <h1 class = "login-titulo"></h1>
             <div class="login-section" style={{ marginLeft: `${2}px` }} >
             <div className="foto3"> <img src={"https://cdn.discordapp.com/attachments/822153718497411137/1116838149239357550/Cadastro4.capiva.png"}  width={420} height={390} alt="Casdatro"/> </div>
                 <label class="login-label">Email:</label>
                 <input class="login-input" type="text" id="email" />
                 <br/>
                 <label class="login-label">Usuário:</label>
                 <input class="login-input" type="text" id="username" />
                 <br/>
                 <label class="login-label">Senha:</label>
                 <input class="login-input" type="password" id="password" />
                 
                 <br/>
                 <button class="login-button" onClick={Cadastrar}>Cadastrar</button>
                
             </div>
         </section>
     );
 
     function Cadastrar() {
        pagina('/agenda')
     }
 };
 
 export default Login;
 