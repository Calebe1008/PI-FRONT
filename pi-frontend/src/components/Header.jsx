import {MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { app } from "../firebase.config"
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

function Header() {

  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider()
  
  const [{user, carrinho, cartItems}, dispatch] = useStateValue()

  const [isMenu, setIsMenu] = useState(false)
  

  const login = async () => {
    if(!user) {
      const {user : {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider)
      dispatch({
      type : actionType.SET_USER,
      user : providerData[0]
    })
    localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu)
    }
  }

  const logout = () => {
    setIsMenu(false)
    localStorage.clear()

    dispatch({
      type : actionType.SET_USER,
      user : null,
    })
  }

  const showCarrinho = () =>{
    dispatch({
      type : actionType.SET_CARRINHO_SHOW,
      carrinho : !carrinho,
    })
  }

  return(
    <header className="fixed bg-white z-60 w-screen p-3 px-4 md:p-6 md:px-16 ">
      {/* vizualização desktop e tablet */}
      <div className="hidden md:flex w-full items-center justify-between">
        <Link to={'/'} className="felx items-center gap-2">
          <img src="./logo.png" alt="Pizza_logo" className="w-12 object-cover"/>
          <p className="text-headingColor text-xl font-bold">  Delivery</p>
        </Link>

        <div className=" flex items-center gap-8">
          <motion.ul initial={{opacity : 0, x: 200 }} 
          animate={{opacity : 1, x: 0 }}
          exit={{opacity : 0, x: 200 }} className="flex items-center gap-8 ">
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
            onClick={() => setIsMenu(false)}><Link to={"/"}>Home</Link></li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
            onClick={() => setIsMenu(false)}><Link to="/cardapio">Cardápio</Link></li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
            onClick={() => setIsMenu(false)}>Sobre</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
            onClick={() => setIsMenu(false)}><Link to="/login">Login</Link></li>
          </motion.ul>

          {/* Carrinho de compras */}
          <div className="flex relative items-center justify-center" onClick={showCarrinho}>
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer"/>
            {cartItems && cartItems.length >0 && (<div className="absolute -top-4 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">{cartItems.length}</p>
            </div>)}
          </div>
          
          <div className="relative">
          <Link to={"/login"}><motion.img
            whileTap={{scale: 0.6}}
            alt="Avatar" src={ user ? user.photoURL : "./avatar.png"}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl rounded-full cursor-pointer"
            // onClick={login}
          /></Link>

          {
            isMenu && (
              <motion.div initial={{opacity : 0, scale : 0.6}} 
              animate={{opacity : 1, scale : 1}}
              exit={{opacity : 0, scale : 0.6}}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute py-2 top-12 right-0">
              <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
              onClick={logout}
              >Logout <MdLogout /></p>
              </motion.div>
            )
          }
          </div>
        </div>
      </div>

      {/* vizualização mobile */}
          <div className="flex items-center justify-between md:hidden wfull h-full">
            <div className="flex relative items-center justify-center" onClick={showCarrinho}>
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer"/>
            {cartItems && cartItems.length >0 && (<div className="absolute -top-4 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">{cartItems.length}</p>
            </div>)}
          </div>

          <Link to={"/"} className="flex items-center gap2">
              <img src="./logo.png"className="w-8 object-cover" alt="logo" />
              <p className="text-headingColor text-xl font-bold">Delivery</p>
            </Link>

            <div className="relative">
            <Link to={"/login"}><motion.img
            whileTap={{scale: 0.6}}
            alt="Avatar" src={ user ? user.photoURL : "./avatar.png"}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl rounded-full cursor-pointer"
            // onClick={login}
          /></Link>

          <ul className="flex flex-col px-4 py-2 gap-8 ">
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
            onClick={() => setIsMenu(false)}>Home</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
            onClick={() => setIsMenu(false)}>Cardápio</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
            onClick={() => setIsMenu(false)}>Sobre</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
            onClick={() => setIsMenu(false)}>Service</li>
          </ul>

          {
            isMenu && (
              <motion.div initial={{opacity : 0, scale : 0.6}} 
              animate={{opacity : 1, scale : 1}}
              exit={{opacity : 0, scale : 0.6}}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute py-2 top-12 right-0">
              <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
              onClick={logout}
              >Logout <MdLogout /></p>
              </motion.div>
            )
          }
          </div>
          </div>
        </header>
  )
}
    

export default Header;