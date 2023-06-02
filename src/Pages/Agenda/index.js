/*********************************
 ******|      AgendaO.js     |******
 *********************************/ 

 import React, { useState } from 'react';
import Header from '../../components/Header/header';
import './agenda.css';

function Agenda() {
  const [conteudo, setConteudo] = useState('');
  const [fonte, setFonte] = useState('Arial, sans-serif');
  const [tamanhoFonte, setTamanhoFonte] = useState('16px');
  const [corFonte, setCorFonte] = useState('#000000');
  const [imagem, setImagem] = useState('');

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

  function alterarFonte(e) {
    setFonte(e.target.value);
  }

  function alterarTamanhoFonte(e) {
    setTamanhoFonte(e.target.value);
  }

  function alterarCorFonte(e) {
    setCorFonte(e.target.value);
  }

  function selecionarImagem(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setImagem(event.target.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <>
      <Header />
      <div className="agenda-body">
        <textarea
          className="agenda-textarea"
          value={conteudo}
          onChange={areaDeTexto}
          style={{ fontFamily: fonte, fontSize: tamanhoFonte, color: corFonte }}
        />
        <div>
          <label htmlFor="fonte">Fonte:</label>
          <select id="fonte" value={fonte} onChange={alterarFonte}>
            <option value="Arial, sans-serif">Arial</option>
            <option value="Verdana, sans-serif">Verdana</option>
            <option value="Times New Roman, serif">Times New Roman</option>
          </select>
        </div>
        <div>
          <label htmlFor="tamanho-fonte">Tamanho da fonte:</label>
          <input
            id="tamanho-fonte"
            type="text"
            value={tamanhoFonte}
            onChange={alterarTamanhoFonte}
          />
        </div>
        <div>
          <label htmlFor="cor-fonte">Cor da fonte:</label>
          <input
            id="cor-fonte"
            type="color"
            value={corFonte}
            onChange={alterarCorFonte}
          />
        </div>
        <div>
          <label htmlFor="imagem">Imagem:</label>
          <input
            id="imagem"
            type="file"
            accept="image/*"
            onChange={selecionarImagem}
          />
          {imagem && <img src={imagem} alt="Imagem selecionada" />}
        </div>
        <button className="agenda-button" onClick={salvar}>
          Salvar
        </button>
        <button className="agenda-button" onClick={deletar}>
          Deletar
        </button>
      </div>
    </>
  );
}

export default Agenda;
