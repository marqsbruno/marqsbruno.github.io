import React from "react";
import '../css/about.css';
import profile from '../imagens/profile-pic.jpg';


export default function About() {
  return (
    <div className="about-container">
      <div className="text-container">
        <p className="about-text">Olá, tudo bem?</p>
        <p className="about-text">Sou desenvolvedor web Full Stack desde 2022, quando concluí o curso da Trybe, com experiência em Javascript, React, Redux, TypeScript, Docker, MySQL, MongoDB, Express, Node.js, assim como noções de arquitetura MSC, POO e Metodologias Ágeis.</p>
        <p className="about-text">
        Gosto de entender as várias maneiras como a vida se organiza, porque as coisas são como são e porque elas estão onde estão. Em 2013, isso me levou ao curso de Geografia. Atuando principalmente na área de Cartografia e Georeferenciamento, estagiei em orgãos públicos do Estado de São Paulo, com mapeamento de hidrografia e uso do solo.
        </p>
        <p className="about-text"> transição para a área de tecnologia e programação veio da vontade inerente de criar, como forma de expressão, curiosidade e desafio. Meu objetivo é produzir coisas interessantes e curiosas, que possam unir e aguçar o melhor das pessoas.</p>
      </div>
      <div className="img-container">
        <img className="profile-pic" src={profile} alt="foto de perfil" />
      </div>
    </div>
  )
} 