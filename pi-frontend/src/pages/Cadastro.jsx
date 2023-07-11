import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../firebase.config";


function Cadastro() {

  // Login com e-mail e senha
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [
  createUserWithEmailAndPassword,
  user,
  loading,
  error,
] = useCreateUserWithEmailAndPassword(auth);

function handleSignOut(e) {
  e.preventDefault()
  createUserWithEmailAndPassword(email, password)
}

if(loading) {
  return <p>Carregando...</p>
}

  return(
    <div>
      <div className="flex flex-col items-center justify-center mt-11 mb-10">
        <img src="https://firebasestorage.googleapis.com/v0/b/pi-frontend-88d17.appspot.com/o/images%2Fpizza.png?alt=media&token=745140e8-3c54-4564-a5c0-1d4096e76299"
         className=" w-20"/>
        <h1>Cadastre-se</h1>
      </div>

      <form className="w-full h-full flex items-center flex-col">
        <div className="flex flex-col items-start mb-4">
          <label className="text-textColor font-semibold text-base md:text-sm mb-2" htmlFor="email">E-mail:</label>
          <input 
          onChange={e => setEmail(e.target.value)} 
          className="flex flex-row items-start p-4 w-508 h-12 border rounded"
          type="email" name="email" placeholder="Digite seu e-mal..." />
        </div>

        <div className="flex flex-col items-start mb-1">
          <label className="text-textColor font-semibold text-base  md:text-sm mb-2"
          htmlFor="password">Senha:</label>
          <input
          onChange={e => setPassword(e.target.value)}  
          className="flex flex-row items-start p-4 w-508 h-12 border rounded"
          type="password" name="email" placeholder="********" />
        </div>

        <button 
        onClick={handleSignOut}
        type="submit" 
        className="text-white bg-gradient-to-br from-red-400 to-red-800
        w-full md:w-508 px-4 py-2 rounded-lg hover:shadow-lg transition-all
        ease-in-out duration-100">Cadastrar!</button>

        <div className="flex items-center flex-row mt-8">
          <p className="text-textColor font-semibold text-base md:text-sm
          px-1">Entrar com Google</p>
          <img className="w-5 cursor-pointer" src="./google.png " alt="Google"
          />
        </div>
      </form>
    </div>
  )
}

export default Cadastro