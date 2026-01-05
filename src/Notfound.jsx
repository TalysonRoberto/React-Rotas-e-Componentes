import React from 'react'
import { Link } from 'react-router-dom'
import "./App.css"

const Notfound = () => {
  return (
    <section className='Notfound'>
      <img src="https://cdn.pixabay.com/animation/2024/04/24/06/51/06-51-07-721_512.gif" alt="" />
      <p>Página não encontrada</p>
      <p> Clique<Link to="/"> aqui </Link> para retornar para a página</p>
    </section>
    
  )
}

export default Notfound