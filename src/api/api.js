export  const Api = {
    url: 'https://backend-api-todo.herokuapp.com/auth',
    fetchGetRequest: ()=>fetch(Api.url),
    fetchById: (id)=>fetch(Api.url+'/'+id),
    fetchPost: (task)=>{
        return fetch(Api.url+"/register",{
            method: "POST",
            headers: new Headers({
                "Content-type": "application/json"
            }),
            body: JSON.stringify(task)
        })
    },
    fetchPut: (body,id) =>{
        return fetch(Api.url+'/'+id,{
            method: 'PUT',
            headers: new Headers({
                "Content-type": "application/json"
            }),
            body: JSON.stringify(body)
        })
    },
    fetchDelete: (id) =>{
        return fetch(Api.url+"/"+id,{
            method: 'DELETE'
        })
    }
}   