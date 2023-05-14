/*********************************
 ******|      AgendaO.js     |******
 *********************************/ 

 import React, { useState } from 'react';
 import Header from '../../components/Header/header';
 import './agenda.css';
 
 function Agenda() {
   const [conteudo, setConteudo] = useState('');
 
   function salvar() {
     localStorage.setItem('conteudo', conteudo);
     alert('Conteúdo salvo com sucesso!');
   }
   
   function deletar() {
     setConteudo('');
     localStorage.removeItem('conteudo');
   }
 
   function areaDeTexto(e) {
     setConteudo(e.target.value);
   }
 
   return (
    <>
    <Header/>
     <div class="agenda-body">
       <textarea
         class="agenda-textarea"
         value={conteudo}
         onChange={areaDeTexto}
         style={{ width: '100%', height: '400px' }}
       />
       <button class="agenda-button" onClick={salvar}>Salvar</button>
       <button class="agenda-button" onClick={deletar}>Deletar</button>
     </div>
     </>
   );
 }
 
 export default Agenda;