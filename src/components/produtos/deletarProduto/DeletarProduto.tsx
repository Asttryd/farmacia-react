import React from 'react'


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
        <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' >Não</button>
        <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' >
          Sim
        </button>
      </div>
    </div>
    </div>
  )
}

export default DeletarProduto;