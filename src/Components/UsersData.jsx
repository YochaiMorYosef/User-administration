import {useEffect} from 'react'
import {useState} from 'react'
import axios from 'axios'
import UserComp from './User'
import TasksComp from './Tasks'
import PostsComp from './Posts'
import "./user.css"

const UsersDataComp=(props)=> {

  const [users,setUsers] = useState([])
  const [todosAfterUpdateCompleted,setTodosAfterUpdateCompleted] = useState([])
  const [flag,setFlag] = useState(false)
  const [idForDelete,setIdForDelete] = useState(0)
  const [newuser, setNewuser] = useState({id:11,name: '', email: ''})
  const [text,setText] = useState('')
  
  
   useEffect(()=>{
       async function f1 (){
        let usersData = await axios.get('https://jsonplaceholder.typicode.com/users')
        usersData = usersData.data;
        usersData = usersData.filter(x=>x.name.includes(text)||x.email.includes(text))
        setUsers(usersData)
       }
       f1()
   },[text])

   useEffect(()=>{
    async function f1 (){
     let usersData = await axios.get('https://jsonplaceholder.typicode.com/users')
     usersData = usersData.data;
     setUsers(usersData)
    }
    f1()
},[])

   const addUser = () =>{
    setFlag(true)
   }

   const finishToAdd = () =>{
    setFlag(false)
    setUsers([...users, newuser])
}
const doNotAdd = () =>{
  setFlag(false)
}


const deleteUser = () =>{
  let arr = [...users]
  let counter=-1
  let temp=arr.find(item=>{
    counter++;
    return item.id==idForDelete
  })
  if(temp!=undefined){
  arr.splice(counter,1)
  setUsers(arr)
  }
}
   
// The map func will not happened here but previous step
    return (<div >
            <div style={{width:"40%",float:"left"}}>
            {flag &&
            <div style={{width:"250px", borderStyle:"solid", padding:"1em"}}>
             <span>Name:</span>
             <input type="text" onChange={e=> setNewuser({...newuser, name: e.target.value})}/><br />
             <span>Email:</span>
             <input type="text" onChange={e=> setNewuser({...newuser, email: e.target.value})}/>
            <input type="button" value="Cencel" onClick={doNotAdd}/>
            <input type="button" value="Add" onClick={finishToAdd} />
            </div>
            }<div style={{width:"340px", borderStyle:"solid", margin:"20px", padding:"2em", borderRadius:"55px"}}>
             Search: <input type="text" onChange={e=>setText(e.target.value)}></input>
              <input type="button" className="button" value="Add" onClick={addUser} style={{width:"60px",float:"right", margin:"-4px"}}/>
             <br /> Delete user: <input placeholder='By id number' type="number" onChange={e=>setIdForDelete(e.target.value)}/>
             <input type="button" className="button3" value="Delete" onClick={deleteUser} style={{float:"right", margin:"-2px"}}/>
            {users.map((item,index)=>{
                return <span key={index}><UserComp data={item} /></span>
            })}</div>

            
              </div>
             
     
    </div>
  );
}

export default UsersDataComp;
