import { useEffect, useState } from 'react'
import { Header, HomeCointainer, MainContainer } from './components'
import { AnimatePresence } from "framer-motion"

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Cardapio from './pages/Cardapio'
import CarrinhoContainer from './components/CarrinhoContainer'
import { useStateValue } from './context/StateProvider'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'


function App() {
  const [{carrinho}, dispatch] = useStateValue();

  useEffect(() => {},[carrinho])


  return (
    <AnimatePresence mode='wait'>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header className="fixed" />

        <main className=" mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path='/*' element={<HomeCointainer />}/>
            <Route path='/cardapio' element={<Cardapio />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/cadastro' element={<Cadastro />}/>
          </Routes>
        </main>
      </div>
      {carrinho && (<CarrinhoContainer />)}
    </AnimatePresence>
    
  )
}

export default App
