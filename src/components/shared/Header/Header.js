import React from "react";
import '../Header/header.css'
import { Link } from "react-router-dom";



const Header = ()=>{
    return(
        <header className="header">
                <ul className="list">
                    <Link to="/"className="btn">
                        <div className="item">
                            
                            <li className='item-li'>Home</li>
                        </div>
                    </Link>
                    <Link to="/register" className='btn'>
                        <div className="item">
                            
                            <li className='item-li'>Adicionar</li>
                        </div>
                    </Link>

                        
                    
                </ul>
 
        </header>
    )
}
export default Header;