import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaProdutos from './components/produtos/listaProdutos/ListaProdutos';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';

function App() {
  return (
    <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/produtos" element={<ListaProdutos />} />
              <Route path="/categorias" element={<ListaCategorias />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
);
}
export default App;