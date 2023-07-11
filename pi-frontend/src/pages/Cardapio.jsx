import { MdShoppingBasket } from "react-icons/md"
import { motion } from "framer-motion"
import { useStateValue } from "../context/StateProvider"
import { actionType } from "../context/reducer"
import { useEffect, useState } from "react"


function Cardapio({ flag }) {
 const [items, setItems] = useState([])

 const [{ cartItems }, dispatch] = useStateValue()
 const addCarrinho = (item) => {

  dispatch({
    type : actionType.SET_CART_ITEMS,
    cartItems : items,
  })
  localStorage.setItem("cartItems", JSON.stringify(items))
 }


  useEffect(() => {
    addCarrinho()
  }, [items])

  return (
    <div className="w-full h-auto overflow-x-hidden">
    <section className="w-full mt-6">
      <div className=" w-full flex items-center justify-between">
        <p className="text-2xl font-semibold capitalize text-headingColor relative">
          Nossos sabores de Pizza
        </p>
      </div>
      <div 
      className={`w-full my-12 flex items-center justify-between
      ${ flag ? "overflow-x-scroll" : "overflow-x-hidden"}`}>
        
        <div className="my-12 md:w-225 w-300 h-auto bg-cardOverlay rounded-lg p-2 backdrop-blur-lg hover:drop-shadow-lg">
          <div className="w-ful flex items-center justify-between">
            <motion.img whileHover={{scale : 1.2}} src="https://firebasestorage.googleapis.com/v0/b/pi-frontend-88d17.appspot.com/o/images%2Fcalabresa.png?alt=media&token=1b4c4a6f-92be-4a48-a58b-33ccfd5861a5" alt="calarbesa"
            className="w-40 -mt-8 drop-shadow-xl" />
            <motion.div onClick={() =>   setItems([...cartItems, item])} 
            whileTap={{scale : 0.75}}
            className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center
            cursor-pointer hover:shadow-mdmotion. ">
              <MdShoppingBasket className="text-white"/>
            </motion.div>
          </div>
          <div className="w-full flex flex-col items-end justify-end">
            <p className="text-textColor font-semibold text-base md:text-lg ">Calabresa</p>
            <p className="mt-1 text-sm text-gray-500"> Mussarela, calabresa e orégano</p>
            <div className="felx items-center gap-8">
              <p className="text-lg text-headingColor font-semibold">
                <span className="text-sm text-red-500">$</span>20.00
              </p>
            </div>
          </div>
        </div>

        <div className="my-12 md:w-225 w-300 h-auto bg-cardOverlay rounded-lg p-2 backdrop-blur-lg hover:drop-shadow-lg">
          <div className="w-ful flex items-center justify-between">
            <motion.img whileHover={{scale : 1.2}} src="https://firebasestorage.googleapis.com/v0/b/pi-frontend-88d17.appspot.com/o/images%2Fcatubresa.png?alt=media&token=52d23ba5-f0da-45c0-b866-fa70af475d1b" alt="catubresa"
            className="w-40 -mt-8 drop-shadow-xl" />
            <motion.div whileTap={{scale : 0.75}}
            className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center
            cursor-pointer hover:shadow-mdmotion. ">
              <MdShoppingBasket className="text-white"/>
            </motion.div>
          </div>
          <div className="w-full flex flex-col items-end justify-end">
            <p className="text-textColor font-semibold text-base md:text-lg ">Catubresa</p>
            <p className="mt-1 text-sm text-gray-500"> Mussarela, calabresa, catupiry e orégano</p>
            <div className="felx items-center gap-8">
              <p className="text-lg text-headingColor font-semibold">
                <span className="text-sm text-red-500">$</span>20.00
              </p>
            </div>
          </div>
        </div>

        <div className="my-12 md:w-225 w-300 h-auto bg-cardOverlay rounded-lg p-2 backdrop-blur-lg hover:drop-shadow-lg">
          <div className="w-ful flex items-center justify-between">
            <motion.img whileHover={{scale : 1.2}} src="https://firebasestorage.googleapis.com/v0/b/pi-frontend-88d17.appspot.com/o/images%2Fpalmito.png?alt=media&token=34035e27-e68a-4de0-960c-0bfb06548a9f" alt="Palmito"
            className="w-40 -mt-8 drop-shadow-xl" />
            <motion.div whileTap={{scale : 0.75}}
            className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center
            cursor-pointer hover:shadow-mdmotion. ">
              <MdShoppingBasket className="text-white"/>
            </motion.div>
          </div>
          <div className="w-full flex flex-col items-end justify-end">
            <p className="text-textColor font-semibold text-base md:text-lg ">Palmito</p>
            <p className="mt-1 text-sm text-gray-500"> Mussarela, palmito e orégano</p>
            <div className="felx items-center gap-8">
              <p className="text-lg text-headingColor font-semibold">
                <span className="text-sm text-red-500">$</span>20.00
              </p>
            </div>
          </div>
        </div>

        <div className="my-12 md:w-225 w-300 h-auto bg-cardOverlay rounded-lg p-2 backdrop-blur-lg hover:drop-shadow-lg">
          <div className="w-ful flex items-center justify-between">
            <motion.img whileHover={{scale : 1.2}} src="https://firebasestorage.googleapis.com/v0/b/pi-frontend-88d17.appspot.com/o/images%2Fqueijos.png?alt=media&token=9283e638-dcd9-4315-a4e6-d3720c2f18d4" alt="Quatro-queijos"
            className="w-40 -mt-8 drop-shadow-xl" />
            <motion.div whileTap={{scale : 0.75}}
            className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center
            cursor-pointer hover:shadow-mdmotion. ">
              <MdShoppingBasket className="text-white"/>
            </motion.div>
          </div>
          <div className="w-full flex flex-col items-end justify-end">
            <p className="text-textColor font-semibold text-base md:text-lg ">Quatro-Queijos</p>
            <p className="mt-1 text-sm text-gray-500"> Mussarela, ricota, catupiry, cheddar e orégano</p>
            <div className="felx items-center gap-8">
              <p className="text-lg text-headingColor font-semibold">
                <span className="text-sm text-red-500">$</span>20.00
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>

<section className="w-full mt-6">
<div className=" w-full flex items-center justify-between">
  <p className="text-2xl font-semibold capitalize text-headingColor relative">
    Pizzas Doces
  </p>
</div>
<div 
className={`w-full my-12 flex items-center justify-between
${ flag ? "overflow-x-scroll" : "overflow-x-hidden"}`}>
  
  <div className="my-12 md:w-225 w-300 h-auto bg-cardOverlay rounded-lg p-2 backdrop-blur-lg hover:drop-shadow-lg">
    <div className="w-ful flex items-center justify-between">
      <motion.img whileHover={{scale : 1.2}} src="https://firebasestorage.googleapis.com/v0/b/pi-frontend-88d17.appspot.com/o/images%2Fchoconana.png?alt=media&token=340a3951-ccfb-48cc-8c74-80ae274028a5" alt="Choconana"
      className="w-40 -mt-8 drop-shadow-xl" />
      <motion.div whileTap={{scale : 0.75}}
      className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center
      cursor-pointer hover:shadow-mdmotion. ">
        <MdShoppingBasket className="text-white"/>
      </motion.div>
    </div>
    <div className="w-full flex flex-col items-end justify-end">
      <p className="text-textColor font-semibold text-base md:text-lg ">Choconana</p>
      <p className="mt-1 text-sm text-gray-500"> Mussarela, chocolate garoto e banana.</p>
      <div className="felx items-center gap-8">
        <p className="text-lg text-headingColor font-semibold">
          <span className="text-sm text-red-500">$</span>20.00
        </p>
      </div>
    </div>
  </div>

  <div className="my-12 md:w-225 w-300 h-auto bg-cardOverlay rounded-lg p-2 backdrop-blur-lg hover:drop-shadow-lg">
    <div className="w-ful flex items-center justify-between">
      <motion.img whileHover={{scale : 1.2}} src="https://firebasestorage.googleapis.com/v0/b/pi-frontend-88d17.appspot.com/o/images%2Fsencacao.png?alt=media&token=1f047337-af24-4ad2-b999-b01e99153103" alt="Sensação"
      className="w-40 -mt-8 drop-shadow-xl" />
      <motion.div whileTap={{scale : 0.75}}
      className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center
      cursor-pointer hover:shadow-mdmotion. ">
        <MdShoppingBasket className="text-white"/>
      </motion.div>
    </div>
    <div className="w-full flex flex-col items-end justify-end">
      <p className="text-textColor font-semibold text-base md:text-lg ">Sensação</p>
      <p className="mt-1 text-sm text-gray-500"> Mussarela, chocolate, morango e leite condensado.</p>
      <div className="felx items-center gap-8">
        <p className="text-lg text-headingColor font-semibold">
          <span className="text-sm text-red-500">$</span>20.00
        </p>
      </div>
    </div>
  </div>

  <div className="my-12 md:w-225 w-300 h-auto bg-cardOverlay rounded-lg p-2 backdrop-blur-lg hover:drop-shadow-lg">
    <div className="w-ful flex items-center justify-between">
      <motion.img whileHover={{scale : 1.2}} src="https://storage.googleapis.com/pi-frontend-88d17.appspot.com/images/prestigio.png?GoogleAccessId=service-193322082056@gcp-sa-firebasestorage.iam.gserviceaccount.com&Expires=1689096236&Signature=VDKTW31Uyh5Vd6wKTodjpZKwDonao%2BHhmHXvKzxG6iYlK8EYA/08iIraURTXP/oZGYh%2BEeN/sDrIlM5dNmoygeKOCwiVXOPWER2TkZMOCh9PbUbjCEmDtkef/kcOl3vXWDDUrOe17q1yNz6SLr8I%2BhpqGycZeBwCSDXk0InrAhnb/1lxqBpqyXlxwKwWO7D5a4UvVutbtVJNr/Ap8KhYM4usH8tbJOJUE/zROM2JWoxkInGLqvNY/fT4smc8A7nk8fc8HF/Uw%2BBfRO8KnSOScAGEzCk6tYKaCfNDSfXEZ95iaSy4HXqXJYq/rNvg8GDPonQilRwg3kmgdPCYnTKvwA%3D%3D" alt="Prestigio"
      className="w-40 -mt-8 drop-shadow-xl" />
      <motion.div whileTap={{scale : 0.75}}
      className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center
      cursor-pointer hover:shadow-mdmotion. ">
        <MdShoppingBasket className="text-white"/>
      </motion.div>
    </div>
    <div className="w-full flex flex-col items-end justify-end">
      <p className="text-textColor font-semibold text-base md:text-lg ">Chocolate</p>
      <p className="mt-1 text-sm text-gray-500"> Mussarela, chocolate em barra garoto</p>
      <div className="felx items-center gap-8">
        <p className="text-lg text-headingColor font-semibold">
          <span className="text-sm text-red-500">$</span>20.00
        </p>
      </div>
    </div>
  </div>

  <div className="my-12 md:w-225 w-300 h-auto bg-cardOverlay rounded-lg p-2 backdrop-blur-lg hover:drop-shadow-lg">
    <div className="w-ful flex items-center justify-between">
      <motion.img whileHover={{scale : 1.2}} src="https://firebasestorage.googleapis.com/v0/b/pi-frontend-88d17.appspot.com/o/images%2Faorvete.png?alt=media&token=0db5390a-47df-4de1-8f97-3c5ef44493a5" alt="Sorvete"
      className="w-40 -mt-8 drop-shadow-xl" />
      <motion.div whileTap={{scale : 0.75}}
      className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center
      cursor-pointer hover:shadow-mdmotion. ">
        <MdShoppingBasket className="text-white"/>
      </motion.div>
    </div>
    <div className="w-full flex flex-col items-end justify-end">
      <p className="text-textColor font-semibold text-base md:text-lg ">Sorvete</p>
      <p className="mt-1 text-sm text-gray-500"> Mussarela, chocolate ao leite e bolas de sorvete .</p>
      <div className="felx items-center gap-8">
        <p className="text-lg text-headingColor font-semibold">
          <span className="text-sm text-red-500">$</span>20.00
        </p>
      </div>
    </div>
  </div>
</div>

</section>

<section className="w-full mt-6">
<div className=" w-full flex items-center justify-between">
  <p className="text-2xl font-semibold capitalize text-headingColor relative">
    Bebidas
  </p>
</div>
<div 
className={`w-full my-12 flex items-center justify-between
${ flag ? "overflow-x-scroll" : "overflow-x-hidden"}`}>
  
  <div className="my-12 md:w-225 w-300 h-auto bg-cardOverlay rounded-lg p-2 backdrop-blur-lg hover:drop-shadow-lg">
    <div className="w-ful flex items-center justify-between">
      <motion.img whileHover={{scale : 1.2}} src="https://firebasestorage.googleapis.com/v0/b/pi-frontend-88d17.appspot.com/o/images%2Fbrahma.png?alt=media&token=af8ed4fb-9411-47ff-829d-1e3a604d177c" alt="Cerveja"
      className="w-40 -mt-8 drop-shadow-xl" />
      <motion.div whileTap={{scale : 0.75}}
      className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center
      cursor-pointer hover:shadow-mdmotion. ">
        <MdShoppingBasket className="text-white"/>
      </motion.div>
    </div>
    <div className="w-full flex flex-col items-end justify-end">
      <p className="text-textColor font-semibold text-base md:text-lg ">Cerveja</p>
      <p className="mt-1 text-sm text-gray-500"> Brahma chopp lata.</p>
      <div className="felx items-center gap-8">
        <p className="text-lg text-headingColor font-semibold">
          <span className="text-sm text-red-500">$</span>5.00
        </p>
      </div>
    </div>
  </div>

  <div className="my-12 md:w-225 w-300 h-auto bg-cardOverlay rounded-lg p-2 backdrop-blur-lg hover:drop-shadow-lg">
    <div className="w-ful flex items-center justify-between">
      <motion.img whileHover={{scale : 1.2}} src="https://firebasestorage.googleapis.com/v0/b/pi-frontend-88d17.appspot.com/o/images%2Fskol.png?alt=media&token=3e1c3854-d049-4381-aa1d-5e2413bf6a66" alt="Cerveja"
      className="w-40 -mt-8 drop-shadow-xl" />
      <motion.div whileTap={{scale : 0.75}}
      className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center
      cursor-pointer hover:shadow-mdmotion. ">
        <MdShoppingBasket className="text-white"/>
      </motion.div>
    </div>
    <div className="w-full flex flex-col items-end justify-end">
      <p className="text-textColor font-semibold text-base md:text-lg ">Cerveja</p>
      <p className="mt-1 text-sm text-gray-500"> skol lata</p>
      <div className="felx items-center gap-8">
        <p className="text-lg text-headingColor font-semibold">
          <span className="text-sm text-red-500">$</span>5.00
        </p>
      </div>
    </div>
  </div>

  <div className="my-12 md:w-225 w-300 h-auto bg-cardOverlay rounded-lg p-2 backdrop-blur-lg hover:drop-shadow-lg">
    <div className="w-ful flex items-center justify-between">
      <motion.img whileHover={{scale : 1.2}} src="https://firebasestorage.googleapis.com/v0/b/pi-frontend-88d17.appspot.com/o/images%2Frefrislata.png?alt=media&token=b214cfee-423d-44da-8072-beb0b4d47b7f" alt="Prestigio"
      className="w-40 -mt-8 drop-shadow-xl" />
      <motion.div whileTap={{scale : 0.75}}
      className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center
      cursor-pointer hover:shadow-mdmotion. ">
        <MdShoppingBasket className="text-white"/>
      </motion.div>
    </div>
    <div className="w-full flex flex-col items-end justify-end">
      <p className="text-textColor font-semibold text-base md:text-lg ">Refrigerante</p>
      <p className="mt-1 text-sm text-gray-500"> Lata</p>
      <div className="felx items-center gap-8">
        <p className="text-lg text-headingColor font-semibold">
          <span className="text-sm text-red-500">$</span>2.00
        </p>
      </div>
    </div>
  </div>

  <div className="my-12 md:w-225 w-300 h-auto bg-cardOverlay rounded-lg p-2 backdrop-blur-lg hover:drop-shadow-lg">
    <div className="w-ful flex items-center justify-between">
      <motion.img whileHover={{scale : 1.2}} src="https://firebasestorage.googleapis.com/v0/b/pi-frontend-88d17.appspot.com/o/images%2Frefri.png?alt=media&token=2322dc8b-4e67-467a-8861-18d53b164eb1" alt="Refrigerante"
      className="w-40 -mt-8 drop-shadow-xl" />
      <motion.div whileTap={{scale : 0.75}}
      className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center
      cursor-pointer hover:shadow-mdmotion. ">
        <MdShoppingBasket className="text-white"/>
      </motion.div>
    </div>
    <div className="w-full flex flex-col items-end justify-end">
      <p className="text-textColor font-semibold text-base md:text-lg ">Refrigerante</p>
      <p className="mt-1 text-sm text-gray-500"> 2L</p>
      <div className="felx items-center gap-8">
        <p className="text-lg text-headingColor font-semibold">
          <span className="text-sm text-red-500">$</span>8.00
        </p>
      </div>
    </div>
  </div>
</div>

</section>
</div>
    
    
  )
}

export default Cardapio