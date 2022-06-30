import {useEffect} from 'react'
import {useState} from 'react'
import axios from 'axios'


const TaskComp=(props)=> {

  const [completed,setCompleted] = useState(props.task.completed)

  const markCompleted = ()=>{
    if(props.task.completed==false){
    props.callback(props.task.id)
    }

  }


    return (<div style={{width:"300px", borderStyle:"solid", margin:"5px", padding:"0.5em"}}>

             Title:{' '+props.task.title}<br/>
             Completed:{props.task.completed?' true':' false'}
             <input style={{visibility:completed?"hidden":"visible"}} type="button"  value="Mark Completed" onClick={markCompleted} style={{float:"right"}}/>
           
     
    </div>
  );
}

export default TaskComp;
