import React from 'react'
import "./Home.css"
import homeimg from "../../img/homeimg.jpg"

const Home = () => {
  return (
    <section>
        <main className='home'>
          <div className='welcome'>
            <div>
              <h1>Bem-vindo à Programador Online..</h1>
              <p>Somos especialistas em criar sistemas sob medida, sites de alta performance e automações que fazem o seu negócio crescer enquanto você dorme..</p>
            </div>
            <img src={homeimg} alt="" />
          </div>
          <div className='destaque'>
              <div className="servico">
                  <h3>Desenvolvimento Web:</h3>
                  <p>Sites responsivos e lojas virtuais..</p>
              </div>
              <div className="servico">
                  <h3>Aplicações Mobile:</h3>
                  <p>Apps para iOS e Android..</p>
              </div>
              <div className="servico">
                  <h3>Consultoria Tech:</h3>
                  <p>Transformação digital para empresas tradicionais..</p>
              </div>
          </div>
        </main>
    </section>
  )
}

export default Home