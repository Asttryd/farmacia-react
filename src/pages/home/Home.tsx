import React from 'react';
import homeLogo from '../../assets/heroImg.svg';
import './Home.css';
import ListaPostagens from '../../components/produtos/listaProdutos/ListaProdutos';


function Home() {
    return (
        <>
        <div className="bg-blue-900 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>TMT Drogaria</h2>
              <p className='text-xl'>De cosméticos a fitoterápicos. Você encontra aqui o que precisa!</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver produtos</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
        <ListaPostagens />
      </>
    );
}

export default Home;