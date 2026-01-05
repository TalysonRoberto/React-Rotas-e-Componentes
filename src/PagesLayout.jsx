import { Outlet } from 'react-router-dom';
import Footer from './Componentes/Footer/Footer';
import Header from './Componentes/Header/Header';


const PageLayout= () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
};

export default PageLayout
