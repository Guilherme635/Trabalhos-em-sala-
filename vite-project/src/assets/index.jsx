import "./index.css"
import { useState } from "react"

function Header () {
  const [AbrirFechar, setAbrirFechar] = useState (false)

  function handleAbrirFecharMenu () {
    if(AbrirFechar) {
      setAbrirFechar(false)
      return
    }
    setAbrirFechar(true)
  }

    return (
       <header>
         <div className="menu-mobiçe" >
           <div className="botao-menu"></div>
         <button onClick={handleAbrirFecharMenu}> {AbrirFechar==true ? "Fechar Menu" : "Abrir Menu" } </button>
         </div>

         <div className={`menu ${AbrirFechar==true ? "" : "close"}`}>
            <nav>
            <a href="configuraçoes">
            </a><a href="login">
            </a><a href="sobre"></a>
            </nav>
         </div> 

           <div className="menu-desktop"></div>
            <h1>Acessa aí</h1>

            <nav>
            <a href="configuraçoes">
            </a><a href="login">
            </a><a href="sobre"></a>
            </nav>
           
       </header> 
    )
}

export default Header