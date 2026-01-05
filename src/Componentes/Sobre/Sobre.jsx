import React from 'react'
import { Link } from 'react-router-dom'
import "./Sobre.css"

const Sobre = () => {
  return (
    <section className='sobre'>
      <div className='info'>
        <strong> A História: </strong> Fundada em 2025, a Programador Online nasceu da necessidade de simplificar a 
        linguagem técnica. Acreditamos que a tecnologia deve ser uma ponte, não um obstáculo.
        <strong> Nossos Valores: </strong>
        Transparência em cada commit..
        Foco total na experiência do usuário (UX)..
        Inovação constante com as tecnologias mais modernas (React, Node, Python)..
      </div>
    <ul>
      <li>
        <Link to={"/equipe/1/CEO & Fullstack/28/Talyson Roberto"}> 
          <div></div> 
          <h3>CEO & Fullstack</h3>
          <p>Talyson Roberto</p>
        </Link>
      </li>

      <li>
        <Link to={"/equipe/2/UXUI Designer/28/Mikaelly Maria"}>
          <div></div> 
          <h3>UX/UI Designer</h3>
          <p>Mikaelly Maria</p>
        </Link>
      </li>

      <li>
        <Link to={"/equipe/3/Dev Backend/32/Carlos Souza"}>
          <div></div> 
          <h3>Dev Backend</h3>
          <p>Carlos Souza</p>
        </Link>
      </li>

      <li>
        <Link to={"/equipe/4/Gestora de Projetos/37/Ana Costa"}>
          <div></div> 
          <h3>Gestora de Projetos</h3>
          <p>Ana Costa</p>
        </Link>
      </li>

    </ul>
    </section>
  )
}

export default Sobre