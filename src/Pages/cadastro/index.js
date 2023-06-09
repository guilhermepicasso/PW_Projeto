import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
 
 
 function Cadastro() {
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     let pagina = useNavigate();

     const handleNameChange = (event) => {
        setName(event.target.value);
      };

     const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    
      const handleCadastro = async (event) => {
        event.preventDefault();
    
        try {
            const response = await fetch('http://localhost:3333/userinsert/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name, email, password }),
            });
          
            if (response.ok) {
              window.alert(`Usuário ${email} cadastrado com sucesso`);
              pagina('/');
            } else {
              window.alert(`Usuario ou email já estão sendo usados`);
            }
          } catch (error) {
            console.error('Ocorreu um erro ao fazer o cadastro:', error);
          }
      };
 
     return (
        <form onSubmit={handleCadastro}>
         <section class="login-body">
             <h1 class = "login-titulo">CapNotion</h1>
             <div class="login-section">
                 <label class="login-label">Usuário:</label>
                 <input class="login-input" type="name" id="username" 
                 value={name}
                 onChange={handleNameChange}
                 required
                 />
                 <br/>
                 <label class="login-label">email:</label>
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
                 <button class="login-button" type="submit" >Cadastrar</button>
                 <br/>
             </div>
         </section>
        </form>
     );
 };
 
 export default Cadastro;