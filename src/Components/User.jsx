import {useEffect} from 'react'
import {useState} from 'react'
import axios from 'axios'
import OtherDataComp from './OtherData';
import TasksComp from './Tasks';
import { useCallback } from 'react';
import PostComp from './Post';
import PostsComp from './Posts';
import "./user.css"


const UserComp=(props)=> {

  //const [user,setUser] = useState([])
 // const [userData,setUserData] = uprops.data.nameseState({})
  const [counter,setCounter] = useState(0)
  const [flag, setFlag] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [bg_color, setBg_color] = useState(false)
  const [border_color, setBorder_color] = useState(false)


  const updateUser = async () =>
  {
    let obj = {name : name, email : email};

    let resp = await axios.put("http://jsonplaceholder.typicode.com/users/"+props.data.id, obj);
    console.log(resp.data);
    alert('User information updated')
  }

 

  const viewTasksPosts = () =>{
    setBg_color(!bg_color)
    setFlag(!flag)
  }   

  
  const callbackAfterMarkCompleted=()=>{
      //setCheckCompleted(!checkCompleted)
   setBorder_color(true) // I puted here for chack that callback work, now start
  }

    return (<div>
      
    <div style={{backgroundColor:bg_color?"#d88c2ad3":"white" ,width:"300px", borderStyle:"solid", borderColor:border_color?"green":"red" , margin:"5px", padding:"0.5em"}}>
      
        ID:<label >{props.data.id} </label><button className="button" onClick={viewTasksPosts}>get data</button>  <br/>
        Name: <input type="text" placeholder={props.data.name} value={name}  onChange={e=>setName(e.target.value)}/> <br/>
        Email: <input type="text" placeholder={props.data.email} value={email} onChange={e=>setEmail(e.target.value)}/><br/>
        <input type="button" value="OtherData" className="button2" onClick={()=>setCounter(counter+1)}/>
        <span>  </span><input style={{float:"right", margin:"2px"}} className="button" type="button" value="Update" onClick={updateUser}/>
        
        {counter%2!=0 &&
        <OtherDataComp data={props.data.address} />
        }
        </div>
       <div style={{ position:"absolute", margin: "auto",top: "0",right: "0",bottom: "0",
  left: "0",
  width: "200px",
  height: "550px",}}>
        <div >
        {
         flag && <TasksComp userId={props.data.id} callB={callbackAfterMarkCompleted} />
          
        }
         {
        flag && <PostsComp userId={props.data.id}/>
       }
        </div>
        </div>
    </div>
  );
}

export default UserComp;
