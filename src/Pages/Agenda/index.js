/*********************************
 ******|      AgendaO.js     |******
 *********************************/ 

import React, { useState } from 'react';

function Agenda() {
  const [conteudo, setConteudo] = useState('');

  function salvar() {
    localStorage.setItem('conteudo', conteudo);
    alert('Conteúdo salvo com sucesso!');
  }
  function deletar() {
    setConteudo('');
    localStorage.removeItem('bloco')
  }

  function areaDeTexto(e) {
    setConteudo(e.target.value);
  }

  return (
    <div>
      <textarea
        value={conteudo}
        onChange={areaDeTexto}
        style={{ width: '100%', height: '400px' }}
      />
      <button onClick={salvar}>Salvar</button>
      <button onClick={deletar}>Deletar</button>
    </div>
  );
}

export default Agenda;