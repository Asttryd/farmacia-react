import React from 'react'
import { Link } from 'react-router-dom';


function DeletarProduto() {
 
  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar produto</h1>

      <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o produto a seguir?</p>

      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-blue-600 text-white font-bold text-2xl uppercase'>Biotônico Fontura</header>
      <div className="p-4">
        <p className='text-xl h-full'>TIPO: XAROPE</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, eos aperiam deserunt sit voluptas officia perspiciatis nisi vel unde.</p>
      </div>
      <div className="flex">
      <Link to='/home' className='w-full text-slate-100 bg-blue-400 hover:bg-blue-800 flex items-center justify-center py-2'>
          <button>Sim</button>
        </Link>
        <Link to='/produtos' className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Não</button>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default DeletarProduto;