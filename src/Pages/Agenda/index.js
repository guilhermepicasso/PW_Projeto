/*********************************
 ******|      AgendaO.js     |******
 *********************************/ 

 import React, { useState, useRef } from 'react';
import Header from '../../components/Header/header';
import './agenda.css';

function Agenda() {
  const [conteudo, setConteudo] = useState('');
  const menuContextoRef = useRef(null);

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

  function exibirMenuContexto(e) {
    e.preventDefault();

    const menu = menuContextoRef.current;
    menu.style.display = 'block';
    menu.style.left = `${e.clientX}px`;
    menu.style.top = `${e.clientY}px`;
  }

  function aplicarEstilo() {
    const menu = menuContextoRef.current;
    const fonte = menu.querySelector('#fonte').value;
    const tamanhoFonte = menu.querySelector('#tamanho-fonte').value + 'px'; // Adiciona 'px' ao valor do tamanho da fonte
    const corFonte = menu.querySelector('#cor-fonte').value;

    const textarea = document.getElementById('agenda-textarea');
    textarea.style.fontFamily = fonte;
    textarea.style.fontSize = tamanhoFonte;
    textarea.style.color = corFonte;

    fecharMenuContexto();
  }

  function fecharMenuContexto() {
    const menu = menuContextoRef.current;
    menu.style.display = 'none';
  }

  return (
    <>
      <Header />
      <div className="agenda-body">
        <textarea
          id="agenda-textarea"
          className="agenda-textarea"
          value={conteudo}
          onChange={areaDeTexto}
          onContextMenu={exibirMenuContexto}
          style={{ width: '100%', height: '100%' }} // Ajusta a altura para ocupar a tela inteira
        />
        <button className="agenda-button" onClick={salvar}>
          Salvar
        </button>
        <button className="agenda-button" onClick={deletar}>
          Deletar
        </button>
        <div className="menu-contexto" ref={menuContextoRef} onContextMenu={fecharMenuContexto}>
          <div>
            <label htmlFor="fonte">Fonte:</label>
            <select id="fonte">
              <option value="Arial">Arial</option>
              <option value="Verdana">Verdana</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Courier New">Courier New</option>
              <option value="Georgia">Georgia</option>
              <option value="Trebuchet MS">Trebuchet MS</option>
              <option value="Arial Black">Arial Black</option>
              <option value="Impact">Impact</option>
              <option value="Lucida Sans Unicode">Lucida Sans Unicode</option>
              <option value="Tahoma">Tahoma</option>
              <option value="Verdana">Verdana</option>
              <option value="Palatino Linotype">Palatino Linotype</option>   
            </select>
          </div>
          <div>
            <label htmlFor="tamanho-fonte">Tamanho da Fonte:</label>
            <input type="number" id="tamanho-fonte" min="8" max="72" />
          </div>
          <div>
            <label htmlFor="cor-fonte">Cor da Fonte:</label>
            <input type="color" id="cor-fonte" />
          </div>
          <button onClick={aplicarEstilo}>Aplicar Estilo</button>
        </div>
      </div>
    </>
  );
}

export default Agenda;
