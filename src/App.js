import React, { useState, useEffect } from 'react';
import { Formulario } from './components/Formulario';
import { Header } from './components/Header';
import { Noticias } from './components/Noticias';

function App() {

  const [ categoria, setCategoria ] = useState('');
  const [ noticias, setNoticias ] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const apiKey = process.env.REACT_APP_APIKEY_NEWS;
      const url = `http://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${apiKey}`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      setNoticias(noticias.articles);
    };
    consultarAPI();
  }, [categoria])

  return (
    <>
      <Header titulo="Buscador de Noticias" />

      <div className="container white"> 
        <Formulario 
          setCaragoria={setCategoria}
        />

        <Noticias 
          noticias={noticias}
        />
      </div>
    </>
  );
};

export default App;
