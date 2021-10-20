import React from 'react';
import '../Cadastro/cadastrar.css'
import {Api} from '../../api/api';

const Cadastro = (props) => {
    const history = props.history;
    const id = props.match.params.id
    

    


    const handleSubmit = async (evento) => {
        evento.preventDefault();
        

            const titulo = evento.target.titulo.value;
            const descricao = evento.target.descricao.value; 
            const prioridade = evento.target.prioridade.value;
            const status = evento.target.status.value;
            const prazo = evento.target.prazo.value;
 
         const task = {
            titulo,
            descricao,
            prioridade,
            status,
            prazo
          }

          try {
              const response = await Api.fetchPost(task);
              const result = await response.json();
              alert(result.message)
              history.push('/')
          } catch(error) {
              console.log(error);
          }
    }
       
    
    
    

    return (
        <div className="container">

            <form className="formulario" onSubmit={handleSubmit}>
                <div className="title">
                <h3 className="title-form">Cadastrar uma nova tarefa</h3>  
                </div> 
                <div className titulo>          
                <input type="text" id="titulo" name="titulo" placeholder="titulo" className="inputUser"/>
                </div>
                <div className="descricao">  
                <input type="text" id="descricao" name="descricao" placeholder="descricao" className="inputUser"/>
                </div>
                <div className="info" > 
                <input type="text" id="prioridade" name="prioridade" placeholder="prioridade" className="inputUser"/>  
                <input type="text" id="status" name="status" placeholder="status" className="inputUser"/>
                <input type="text" id="prazo" name="prazo" placeholder="prazo" className="inputUser"/> 
                </div> 
                <button className="btn-enviar" type="submit" >Enviar</button>
            </form>

        </div>
    )
}

export default Cadastro;