import { Link } from "react-router-dom"


function HomeContainer() {
  return(
   <>
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-scrsection overflow-x-hidden" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-red-600 font-semibold">Entregas!</p>
        <div className="w-6 h-6 rounded-full overflow-hidden bg-white drop-shadow-xl">
          <img alt="Delivery" src="./delivery.png" className="w-full h-full object-contain"/>
        </div>
        </div>

        <p className="text-[2.5rem] md:text-[4.25rem] font-bold tracking-wide text-headingColor">
          A entrega mais rápida da <span className="text-red-600 text-[3rem] lg:text-[5rem]">sua cidade</span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, tempora repellat. Praesentium debitis assumenda modi molestiae doloremque vero, nulla odio suscipit sit dolores iste tempore ut provident a impedit expedita.</p>

        <Link to={"/cardapio"}><button type="button" className="text-white bg-gradient-to-br from-red-400 to-red-800 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100">Faça seu pedido!</button></Link>
      </div>
      <div className="py-2 flex-1 flex items-center">
        <img alt="banner" src="./banner.png" className=" ml-auto h-420 w-full lg:w-auto lg:h-685 right-16"/>
        <div className="w-full h-full absolute flex items-center justify-center"></div>
      </div>
    </section>
    </>

  )
}

export default HomeContainer