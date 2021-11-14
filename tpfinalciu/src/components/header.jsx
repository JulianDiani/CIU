import React from 'react'
import logoPokemon from './imagenes/prueba2.png'


const Header = () => {
    
    return ( 
        <div className="flex items-center justify-center bg-yellow-300">
            <img src={logoPokemon} alt="" />
             
        </div>
        
     );
}
 
export default Header;