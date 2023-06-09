/*********************************
 ******|      AgendaO.js     |******
 *********************************/ 
 import React, { useState, useRef } from 'react';
import Header from '../../components/Header/header';
import './agenda.css';

function Agenda() {
  const [conteudo, setConteudo] = useState('');
  const [gifFile, setGifFile] = useState(null);
  const menuContextoRef = useRef(null);

  function salvar() {
    localStorage.setItem('conteudo', conteudo);
    alert('Conteúdo salvo com sucesso!');
  }

  function deletar() {
    setConteudo('');
    localStorage.removeItem('conteudo');
    const textarea = document.getElementById('agenda-textarea');
    textarea.style.backgroundImage = '';
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
    const tamanhoFonte = menu.querySelector('#tamanho-fonte').value;
    const corFonte = menu.querySelector('#cor-fonte').value;
    const imagemFundoInput = menu.querySelector('#imagem-fundo');
    const imagemFundo = imagemFundoInput.files[0] || gifFile;
    const larguraImagem = menu.querySelector('#largura-imagem').value;
    const alturaImagem = menu.querySelector('#altura-imagem').value;
    const posicaoHorizontal = menu.querySelector('#posicao-horizontal').value;
    const posicaoVertical = menu.querySelector('#posicao-vertical').value;

    const textarea = document.getElementById('agenda-textarea');
    textarea.style.fontFamily = fonte;
    textarea.style.fontSize = `${tamanhoFonte}px`;
    textarea.style.color = corFonte;

    if (imagemFundo) {
      const reader = new FileReader();
      reader.onload = () => {
        textarea.style.backgroundImage = `url('${reader.result}')`;
        textarea.style.backgroundSize = `${larguraImagem}px ${alturaImagem}px`;
        textarea.style.backgroundPosition = `${posicaoHorizontal} ${posicaoVertical}`;
      };
      reader.readAsDataURL(imagemFundo);
    }

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
          style={{ width: '100%', height: '400px' }}
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
            </select>
          </div>
          <div>
            <label htmlFor="tamanho-fonte">Tamanho da Fonte:</label>
            <input
              type="number"
              id="tamanho-fonte"
              min="8"
              max="72"
              onChange={() => {
                const textarea = document.getElementById('agenda-textarea');
                textarea.style.fontSize = `${document.getElementById('tamanho-fonte').value}px`;
              }}
            />
          </div>
          <div>
            <label htmlFor="cor-fonte">Cor da Fonte:</label>
            <input type="color" id="cor-fonte" />
          </div>
          <div>
          <label htmlFor="imagem-fundo">Imagem de Fundo:</label>
  <input type="file" id="imagem-fundo" accept="image/*,.gif" onChange={(e) => setGifFile(e.target.files[0])} />
          </div>
          <div>
            <label htmlFor="largura-imagem">Largura da Imagem:</label>
            <input type="number" id="largura-imagem" />
          </div>
          <div>
            <label htmlFor="altura-imagem">Altura da Imagem:</label>
            <input type="number" id="altura-imagem" />
          </div>
          <div>
            <label htmlFor="posicao-horizontal">Posição Horizontal:</label>
            <select id="posicao-horizontal">
              <option value="left">Esquerda</option>
              <option value="center">Centro</option>
              <option value="right">Direita</option>
            </select>
          </div>
          <div>
            <label htmlFor="posicao-vertical">Posição Vertical:</label>
            <select id="posicao-vertical">
              <option value="top">Topo</option>
              <option value="center">Centro</option>
              <option value="bottom">Fundo</option>
            </select>
          </div>
          <button onClick={aplicarEstilo}>Aplicar Estilo</button>
        </div>
      </div>
    </>
  );
}

export default Agenda;
