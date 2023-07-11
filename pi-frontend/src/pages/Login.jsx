import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { app, auth } from "../firebase.config"
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';


function Login() {

    // Login com e-mail e senha
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
      signInWithEmailAndPassword,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    function handleSignIn(e) {
      e.preventDafault()
      signInWithEmailAndPassword(email, password)
    }

    if(loading) {
  return <p>Carregando...</p>
}

// Login com Gooogle
  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider()
  
  const [{user}, dispatch] = useStateValue()
  
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

  
  return(
    <div>
      <header className="flex flex-col items-center justify-center mt-10 mb-10">
        <img src="https://firebasestorage.googleapis.com/v0/b/pi-frontend-88d17.appspot.com/o/images%2Fpizza.png?alt=media&token=745140e8-3c54-4564-a5c0-1d4096e76299" className=" w-20"/>
        <h1>Login</h1>
      </header>

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

        <a className="text-textColor font-semibold text-base md:text-sm
         mb-10" 
        href="">Esqueceu sua senha?</a>

        <button type="submit" 
        onClick={handleSignIn}
        className="text-white bg-gradient-to-br from-red-400 to-red-800
        w-full md:w-508 px-4 py-2 rounded-lg hover:shadow-lg transition-all
        ease-in-out duration-100">Entrar!</button>
        <div className="flex flex-row items-center">
          <p className=" px-2">Ainda não é cadastrado?  </p>
          <Link to="/cadastro" className=" text-red-600"> Cadastre-se aqui</Link>
        </div>

        <div className="flex items-center flex-row">
          <p className="text-textColor font-semibold text-base md:text-sm
          px-1">Entrar com Google</p>
          <img className="w-5 cursor-pointer" src="./google.png " alt="Google"
          onClick={login} />
        </div>
      </form>
    </div>
  )
}

export default Login