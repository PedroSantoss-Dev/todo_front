import React, { useEffect , useState } from "react";
import '../List/List.css'
import Card from "../Card/Card"

const List =({ task, loading })=>{
    if(loading){
        return (
            <div class="container-loading">
                <div class="Loading"></div>
            </div>  
        )
    }
    return(
        <div className="list" >
           {task.map((tarefa)=>(
               <Card tarefa ={tarefa} key={tarefa._id} />
           ))}
        </div>
    )
};
export default List;

