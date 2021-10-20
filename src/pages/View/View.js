import React, { useEffect , useState } from "react";
import { Api } from "../../api/api"
import { Link } from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import "../View/view.css"


const View = (props)=>{
    const id = props.match.params.id;
    const [tarefa,setTarefa] = useState({})
    const [open, setOpen] = useState(false);
    
    useEffect(()=>{
        taskId()
    },[])

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const taskId = async ()=>{
        const response = await Api.fetchById(id);
        const data = await response.json();
        setTarefa(data)
    }
    const handleDelete = async(e)=>{
        const response = await Api.fetchDelete(id)
        const data = response;
        props.history.push('/')
    }
    const today = new Date()
    const date = new Intl.DateTimeFormat('pt-BR',{day: 'numeric', month: 'short', year: 'numeric'}).format(today)
    return(
        <section className="view">
            <div className="container">
                <div className="view-info">
                    <h2 className="title-h2">{tarefa.titulo}</h2>
                    <p className='view-info-p'>Descrição:<span className='view-info-span'>{tarefa.descricao}</span></p>
                    <p className='view-info-p' ><strong>Prioridade:</strong><span className='view-info-span'>{tarefa.prioridade}</span></p>
                    <p className="view-info-p">Status: <span className='view-info-span'>{tarefa.status}</span></p>
                    <p className="view-info-p">Prazo: <span className='view-info-span'>{tarefa.prazo}</span></p>
                    <p className="view-info-p">Criado em <span className='view-info-span'>{date}</span></p>
                    <div className="btn-view"> 
                        <Link to= {`/edit/${tarefa._id}`} className="edit">
                          <button className="editar">editar</button>
                        </Link>
                       <button onClick={onOpenModal} className="btn-excluir">Excluir</button>
                    </div>   
                    <Modal open={open} onClose={onCloseModal} center>
                        <h2 style={{ color: '#2c3e50' }}>Tem certeza que deseja excluir ?</h2>
                        <button onClick={onCloseModal} className='bttn-excluir2' >Cancelar</button>
                        <button style={{ color: 'rgba(255, 0, 0, 0.878)' }}className='bttn-excluir2'onClick={handleDelete}>Excluir</button>
                    </Modal>   
                </div>
            </div>  
            
        </section>
    )
}
export default View;