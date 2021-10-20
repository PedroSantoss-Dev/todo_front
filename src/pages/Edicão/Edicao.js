import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Api } from '../../api/api';
import '../Edicão/edicao.css'

const Edicao = (props) => {
  const _id = props.match.params.id;
  const history = props.history;
  const [task, setTask] = useState({});

  useEffect(() => {
    getTaskById();
  }, []);

  const getTaskById = async () => {
    const response = await Api.fetchById(_id);
    const result = await response.json();
    setTask(result);
  };

  const handleFieldsChange = (event) => {
    const campos = { ...task };
    campos[event.target.name] = event.target.value;

    setTask(campos);
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const taskObj = { ...task };
    try {
      const response = await Api.fetchPut(taskObj, _id);
      const result = await response.json();
      history.push("");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <section className="edit">
      <div className="container">    
          <h1>Editar </h1>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-info">
              <label >
                Titulo
              </label>
              <input
                type="text"
                id="titulo"
                name="titulo"
                value={task.titulo}
                onChange={handleFieldsChange}
                className="add-form-group-input"
              />
            </div>
            <div className="form-info">
              <label >
                Descrição
              </label>
              <input
                type="text"
                id="descricao"
                name="descricao"
                value={task.descricao}
                onChange={handleFieldsChange}
                className="add-form-group-input"
              />
            </div>
            <div className="form-info">
              <label htmlFor="">
                Prioridade
              </label>
              <input
                type="Prioridade"
                id="Prioridade"
                name="Prioridade"
                value={task.Prioridade}
                onChange={handleFieldsChange}
                className="add-form-group-input"
              />
            </div>
            <div className="form-info">
              <label >
                Status
              </label>
              <input
                type="text"
                id="status"
                name="status"
                value={task.status}
                onChange={handleFieldsChange}
                className="in-status"
              />
            </div>
            <div className="form-info">
              <label >
                Prazo
              </label>
              <input
                type="text"
                id="prazo"
                name="prazo"
                value={task.prazo}
                onChange={handleFieldsChange}
                className="in-prazo"
              />
            </div>
            
            <div className="form-btn">
              <Link to={`/`}> 
                  <button className="cancelar">Cancelar</button>
              </Link>
              <button className="salvar" type="submit">
                Enviar
              </button>
            </div>
          </form>
      </div>    
    </section>

  );
};

export default Edicao;