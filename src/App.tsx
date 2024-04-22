import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaProdutos from './components/produtos/listaProdutos/ListaProdutos';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';

function App() {
  return (
    <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/produtos" element={<ListaProdutos />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              {/* <Route path="/cadastroProduto" element={<FormularioProduto />} />
              <Route path="/editarProduto/:id" element={<FormularioProduto />} /> */}
              {/* <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarTema/:id" element={<DeletarCategoria />} /> */}
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
);
}
export default App;