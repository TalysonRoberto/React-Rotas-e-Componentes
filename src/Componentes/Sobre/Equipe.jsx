import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./Sobre.css"

const Equipe = () => {

    const {id, cargo, idade , nome} = useParams();
    const [texto,setTexto] = React.useState("");

    useEffect(()=>{
        if(id==1){
            setTexto("Com uma trajetória marcada pela paixão em resolver problemas complexos através da tecnologia, Talyson Roberto fundou a Programador Online com o objetivo de aproximar o desenvolvimento de software do mundo real. Especialista em arquitetura de sistemas escaláveis, ele domina o ecossistema Fullstack, desde a estruturação de bancos de dados robustos até a entrega de interfaces fluidas em React. Sua visão estratégica garante que cada linha de código escrita pela equipe não seja apenas técnica, mas sim um motor de crescimento para os negócios de nossos clientes.")
        }
        if(id==2){
            setTexto("Para Mikaelly Maria, design não é apenas sobre estética, mas sobre como as coisas funcionam e como as pessoas se sentem ao usá-las. Com vasta experiência em psicologia do usuário e design de interface, Maria é a mente por trás da usabilidade da Programador Online. Ela transforma requisitos complexos em jornadas intuitivas e visualmente impactantes. Seu foco principal é garantir que a experiência final seja tão simples quanto poderosa, reduzindo o atrito e maximizando a conversão em cada projeto que passa por suas mãos.")
        }
        if(id==3){
            setTexto("Carlos é o guardião da lógica e dos dados. Com especialização em Python e infraestrutura em nuvem, ele é responsável por garantir que os sistemas da Programador Online sejam rápidos, seguros e resilientes. Sua expertise em segurança da informação assegura que todos os dados dos nossos parceiros estejam protegidos sob as melhores práticas globais. No dia a dia, Carlos foca na criação de APIs eficientes e automações de backend que sustentam as aplicações de alta performance desenvolvidas pela nossa equipe.")
        }
        if(id==4){
            setTexto("Ana Costa é o elo fundamental que garante a harmonia entre a expectativa do cliente e a execução técnica. Com certificações em metodologias ágeis (Scrum e Kanban), ela gerencia o ciclo de vida dos projetos, desde o planejamento inicial até a entrega final. Sua habilidade em comunicação e organização permite que a equipe mantenha o foco na excelência, cumprindo prazos rigorosos sem comprometer a qualidade. Ana acredita que um projeto de sucesso nasce da transparência e de uma gestão impecável de recursos e tempo")
        }
    },[id])
    

  return (
    <section className='equipe'>
        <div className='perfil'>
            <div></div>
            <h4>{nome}</h4>
            <p>Idede: {idade}</p>
            <p>{cargo}</p>
        </div>
        <div  className='descricao'>
            <p>{texto}</p>
        </div>    
    </section>
  )
}

export default Equipe