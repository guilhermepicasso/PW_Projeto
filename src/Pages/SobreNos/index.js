import React from "react";
import Header from '../../components/Header/header';
import './SNStyle.css';

function SobreNos() {
    return (
        <div>
            <Header/>
            <br/>
            <h1 class = "titulo"></h1>
            <br/>
            <h2 class = "senac">Centro Universitário Senac</h2> 
            <br/>
            <h2 class = "nome1">Guilherme Picasso Novais</h2> 
            <h2 class = "nome2">Pedro Luca Bennes Araújo</h2> 
            <h2 class = "nome3">Kauan Cavalheiro Soares</h2> 
            <h2 class = "nome4">Marco Antonio Bennes Araújo</h2> 
            <h2 class = "nome5">Marcelo Gabriel Marçal</h2> 
            <div className="sobreimagem1"> <img src={"https://cdn.discordapp.com/attachments/822153718497411137/1114277992001175652/Sobre_Nos.png"} alt="SobreNós" width={200} /> </div>
        </div>
    );
}
export default SobreNos;