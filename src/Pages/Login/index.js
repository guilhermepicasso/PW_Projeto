/*********************************
 ******|      Login.js     |******
 *********************************/ 

 import { useNavigate , Link } from 'react-router-dom';
 import React, { useState } from 'react';
 import './login.css'
 
 function Login() {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     let pagina = useNavigate();
     const imagePath = "https://cdn.discordapp.com/attachments/822153718497411137/1114277991149731931/capivara_no_computador.jpg";

     const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    
      const handleLogin = async (event) => {
        event.preventDefault();
    
        try {
          const response = await fetch('http://localhost:3333/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email , password }),
          });
    
          const data = await response.json();
          if (data.success) {
            window.alert(`Usuário ${email} Entrada com sucesso!`)
            pagina('/agenda')
          } else {
            window.alert(`Usuário ${document.getElementById("username").value} /email ou senha incorretos.`)
            
          }
        } catch (error) {
          console.error('Ocorreu um erro ao fazer login:', error);
        }
      };
 
     return (
        <form onSubmit={handleLogin}>
         <section class="login-body">
             <h1 class = "login-titulo"></h1>
             <div class="login-section">
                 <label class="login-label">Email:</label>
                 <input class="login-input" type="email" id="username" 
                 value={email}
                 onChange={handleEmailChange}
                 required
                 />
                 <br/>
                 <label class="login-label">Senha:</label>
                 <input class="login-input" type="password" id="password" 
                 value={password}
                 onChange={handlePasswordChange}
                 required
                 />
                 <br/>
                 <button class="login-button" type="submit" >Confirmar</button>
                 <br/>
                 <Link to="/cadastro">Não tenho conta</Link>
                 <div className="foto1"><img src={imagePath} alt="Capivara" width={400} /></div>
                <div className="foto2"> <img src={"https://cdn.discordapp.com/attachments/822153718497411137/1114282816151232562/image.png"} alt="CapNotion"/> </div>
             </div>
         </section>
        </form>
     );
 };
 
 export default Login;
