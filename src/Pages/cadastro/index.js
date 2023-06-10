/*********************************
 ******|      Login.js     |******
 *********************************/ 

 import { useNavigate} from 'react-router-dom';
 import React, { useState } from 'react';
 
 
 function Cadastro(props) {
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     let pagina = useNavigate();
     const imagePath = "https://cdn.discordapp.com/attachments/822153718497411137/1114277991149731931/capivara_no_computador.jpg";

     const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };

      const handleNameChange = (event) => {
        setName(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    
      const handleLogin = async (event) => {
        event.preventDefault();
    
        try {
          const response = await fetch('http://localhost:3333/userinsert/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email , password }),
          });
    
          const data = await response.json();
          if (response) {
            window.alert(`Usuário ${email} cadastrado com sucesso!`)
            pagina('/')
          } else {
            window.alert(`Usuário ${document.getElementById("username").value} /email já estão sendo usados.`)
            
          }
        } catch (error) {
          console.error('Ocorreu um erro ao fazer login:', error);
        }
      };
     return (
        <form onSubmit={handleLogin}>
         <section class="login-body">
             <h1 class = "login-titulo"></h1>
             <div class="login-section" style={{ marginLeft: `${2}px` }} >
             <div className="foto3"> <img src={"https://cdn.discordapp.com/attachments/822153718497411137/1116838149239357550/Cadastro4.capiva.png"}  width={420} height={390} alt="Casdatro"/> </div>
                 <label class="login-label">Email:</label>
                 <input class="login-input" type="text" id="email" 
                 value={email}
                 onChange={handleEmailChange}
                 required/>
                 <br/>
                 <label class="login-label">Usuário:</label>
                 <input class="login-input" type="text" id="username" 
                 value={name}
                 onChange={handleNameChange}
                 required/>
                 <br/>
                 <label class="login-label">Senha:</label>
                 <input class="login-input" type="password" id="password" 
                 value={password}
                 onChange={handlePasswordChange}
                 required/>
                 <br/>
                 <button class="login-button" type="submit">Cadastrar</button>
             </div>
         </section>
        </form>
     );
 };
 export default Cadastro;
 