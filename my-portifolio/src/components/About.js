import React from "react";
import '../css/about.css';
import profile from '../imagens/profile-pic.jpg';


export default function About() {
  return (
    <div className="about">
      <div className="text-container">
        <p className="about-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, qui possimus! Possimus, deserunt vel explicabo sit inventore facere officiis dolorum, minima maiores vitae iusto nobis doloribus a soluta? Voluptatibus, deserunt.</p>
        <p className="about-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, qui possimus! Possimus, deserunt vel explicabo sit inventore facere officiis dolorum, minima maiores vitae iusto nobis doloribus a soluta? Voluptatibus, deserunt.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, qui possimus!</p>
      </div>
      <img className="profile-pic" src={profile} alt="foto de perfil" />
    </div>
  )
} 