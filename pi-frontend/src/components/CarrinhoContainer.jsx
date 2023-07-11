import { MdOutlineKeyboardBackspace } from "react-icons/md"
import { motion } from "framer-motion"
import { RiRefreshFill } from "react-icons/ri"
import { BiMinus, BiPlus } from "react-icons/bi"
import { useStateValue } from "../context/StateProvider"
import { actionType } from "../context/reducer"

function CarrinhoContainer() {

  const [{carrinho, cartItems}, dispatch] = useStateValue()
  const showCarrinho = () =>{
    dispatch({
      type : actionType.SET_CARRINHO_SHOW,
      carrinho : !carrinho,
    })
  }


  return(
    <motion.div 
    initial={{ opacity: 0, x: 200}}
    animate={{ opacity: 1, x: 0}}
    exit={{ opacity: 0, x: 200}}
    className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white 
    drop-shadow-ms flex flex-col z-[101]">

      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div whileTap={{scale: 0.75}} onClick={showCarrinho}>
          <MdOutlineKeyboardBackspace className="text-textColor text-3xl"/>
          
          </motion.div>
          <p className="text-textColor text-lg font-semibold">Carrinho</p>

          <motion.p whileTap={{scale: 0.75}} className="flex items-center gap-2 p1 px-2 my-2 bg-gray-100
          rounden-md hover:shadow-md cursor-pointer
          text-textColor text-base">Limpar<RiRefreshFill /> {" "}
          </motion.p>
      </div>
      {/*parte de baixo */}
      <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col" >
        <div className="scrollbar-none w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll">
      {/*itens do carrinho */}
          <div className=" w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
            <img src="https://firebasestorage.googleapis.com/v0/b/pi-frontend-88d17.appspot.com/o/images%2Fcalabresa.png?alt=media&token=1b4c4a6f-92be-4a48-a58b-33ccfd5861a5" alt="Calabresa"
          className=" w-20 h-20 max-w-[60px] rounded-full object-contain" />

      {/*nome do item*/}
            <div className="fkex flex-col gap-2">
              <p className="text-base text-gray-50">Calabresa</p>
              <p className="text-sm block text-gray-300 font-semibold">R$ 20,00</p>
            </div>

      {/*Botoes */}    
            <div className="group flex items-center gap-2 ml-auto cursor-pointer">
              <motion.div whileTap={{scale: 0.75}}>
                <BiMinus className="text-gray-50 " />
              </motion.div>
              <p className=" w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">1</p>
              <motion.div whileTap={{scale: 0.75}}>
                <BiPlus className=" text-gray-50"/>
              </motion.div>  
            </div>      
          </div>
        </div>

      {/*total do carrinho */}    
          <div className=" w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col
           items-center justify-evenly px-8 py-2">
            <div className=" w-full flex items-center justify-between">
              <p className=" text-gray-400 text-lg">Sub Total</p>
              <p className=" text-gray-400 text-lg">R$ 20.00</p>
            </div>
            <div className=" w-full flex items-center justify-between">
              <p className=" text-gray-400 text-lg">Entrega</p>
              <p className=" text-gray-400 text-lg">R$ 2.00</p>
            </div>

            <div className=" w-full border-b border-gray-500 my-2"></div>

            <div className=" w-full flex items-center justify-between">
              <p className=" text-gray-200 text-xl font-semibold">Total</p>
              <p className=" text-gray-200 text-xl font-semibold">R$ 22.00</p>
            </div>

            <motion.button
              whileTap={{ scale: 0.8 }}
              type="button"
              className=" w-full p-2 rounded-full bg-yellow-600 text-gray-50 text-lg my-2
              hover:shadow-lg transition-all duration-150 ease-out">
                Finalizar
              </motion.button>
          </div>

      </div>
    </motion.div>
  )
}

export default CarrinhoContainer