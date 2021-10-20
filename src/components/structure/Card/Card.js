import React from "react";
import { Link } from 'react-router-dom';
import '../Card/Card.css'

const Card = ({ tarefa , loading })=>{
    if(loading){
        return <div>Carregando...</div>
    }
    return(
      
        <Link to={`/view/${tarefa._id}`} className='card' style={{textDecoration:'none', color: 'black'}}>
            <div className='card-container'>
                <h2 className='card-title'>{tarefa.titulo}</h2>
                <p className='card-descricao'>{tarefa.descricao}</p>
                <div className='card-info'>
                    <div className="card-prioridade">
                        <p className="prioridade"><span>Prioridade</span><br/>{tarefa.prioridade}</p>
                    </div>
                    <div className="card-status">
                        <p className='status'><span>Status</span><br/> {tarefa.status}</p>
                    </div>
                    <div className="card-prazo">
                        <p className='prazo'><span>Prazo</span><br/> {tarefa.prazo}</p>	
                    </div>

                </div>
            </div>
            
        </Link>
      
    )
};
export default Card;