import React from 'react'
import { Link } from 'react-router-dom';


function CardProduto() {
  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-blue-400 py-2 px-4 items-center gap-4">
          <img src='' className='h-12 rounded-full' alt="" />
          <h3 className='text-lg font-bold text-center uppercase '>BIOTÔNICO FONTURA</h3>
        </div>
        <div className='p-4 '>
          <h4 className='text-lg font-semibold uppercase'>Tipo: Xarope</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium sunt reiciendis accusantium at nisi dicta vitae, asperiores exercitationem ipsa.</p>
          <p>Categoria: Remédios</p>
          <p>Data: 22/04/2024</p>
        </div>
      </div>
      <div className="flex">
      <Link to='/editarProduto/:id' className='w-full text-white bg-blue-400 hover:bg-blue-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to='/deletarProduto/:id' className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardProduto