import {useEffect} from 'react'
import {useState} from 'react'
import axios from 'axios'
import TaskComp from './Task';


const TasksComp=(props)=> {

    const [todos,setTodos] = useState([])
    const [countFalse,setCountFalse] = useState(0)
    const [flag,setFlag] = useState(false)
    const [newtodo, setNewtodo] = useState({title: '', completed: true})
    const [countClickMarkCompleted,setCountClickMarkCompleted] = useState(0)

    useEffect(()=>{
        async function f1 (){
        let count = 0;
         let todosData = await axios.get('https://jsonplaceholder.typicode.com/todos?userId='+props.userId)
         todosData = todosData.data;
         todosData.forEach(element => {
            if(element.completed==false)
                count++
        });
        setCountFalse(count)
         setTodos(todosData)
        }
        f1()
    },[])
    
    const call=(data)=>{
        let index = 0;
        if(data>99) data=data-100;
        if(((data-(data%10))/10)%2!=0)
            index=(data%10)-1+10
        else
            index = (data%10)-1
      
        let arr=[...todos]
        arr[index].completed=true;
        setTodos(arr)
        setCountClickMarkCompleted(countClickMarkCompleted+1)
        if(countClickMarkCompleted==countFalse-1)
        {
            props.callB()
        }
    }

    const addTodo = () =>{
        setFlag(true)
    }
    const finishToAdd = () =>{
        setFlag(false)
        setTodos([...todos, newtodo])
    }
    const doNotAdd = () =>{
        setFlag(false)
    }
   
   return (<div>
            <span>Todos: User {props.userId} </span>
           
            <div style={{width:"340px",borderStyle:"solid", margin:"5px", padding:"0.5em"}}>
            {todos.map((item,index)=>{
                
                return <span key={index}><TaskComp task={item} callback={call}/></span>
            })}</div>
            <input style={{float:"right"}} type="button" value="Add task" onClick={addTodo}/>
            {flag &&
            <div style={{width:"300px", borderStyle:"solid", padding:"1em"}}>
             <span>Title:</span>
             <input type="text" onChange={e=> setNewtodo({...newtodo, title: e.target.value})}/>
            <input type="button" value="Cencel" onClick={doNotAdd}/>
            <input type="button" value="Add" onClick={finishToAdd} />
            </div>
            }<br/>
                 
     
    </div>
  );
}

export default TasksComp;
