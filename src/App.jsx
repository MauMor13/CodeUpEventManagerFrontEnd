import { useState, useEffect } from 'react';
import './App.css';
import Loading from './components/pure/Loading';
import Header from './components/pure/Header';
import Footer from './components/pure/Footer';
import Home from './pages/Home';
import { Routes, Route, HashRouter } from "react-router-dom";
import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';

function AppLoding() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <HashRouter>
        <div className='container_body'>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </StyleSheetManager>
  )
}

function App(){
  return <AppLoding />;
}
export default App
