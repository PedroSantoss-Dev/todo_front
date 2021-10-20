import "../Home/home.css"
import React , { useState, useEffect } from "react";
import List from "../../components/structure/List/List";
import { Api } from "../../api/api"


const Home =() =>{
    const [task,setTask] = useState([])
    
    useEffect(()=>{
        getTask();
    },[])
    
    const getTask = async () =>{
        const response = await Api.fetchGetRequest();
        const data = await response.json();
        setTask(data) 
    }
    return(
        <main>
            <div className="home-title"> 
                <h1 className="Home-h1">Tarefas</h1>
            </div>
            <section className="Home">
                
                <List task={task} loading={!task.length}/>  
            </section>
        </main>
    )
}

export default Home;

