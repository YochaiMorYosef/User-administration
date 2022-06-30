import {useEffect} from 'react'
import {useState} from 'react'
import axios from 'axios'
import PostComp from './Post'



const PostsComp=(props)=> {

    const [posts,setPosts] = useState([])
    const [flag,setFlag] = useState(false)
    const [newpost, setNewpost] = useState({title: '', body: ''})

    useEffect(()=>{
        async function f1 (){
         let postsData = await axios.get('https://jsonplaceholder.typicode.com/posts?userId='+props.userId)
         postsData = postsData.data;
         //postsData=postsData.filter(item=>props.userId==item.userId)
         setPosts(postsData)
        }
        f1()
    }, [])

    const addPost = () =>{
        setFlag(true)
    }
    const finishToAdd = () =>{
        setFlag(false)
        setPosts([...posts, newpost])
    }
    const doNotAdd = () =>{
        setFlag(false)
    }

   return (<div>
            <span>Posts: User {props.userId} </span>
            
            <div style={{width:"340px",borderStyle:"solid", margin:"5px", padding:"0.5em"}}>
            {posts.map((item,index)=>{
                return <span key={index}><PostComp post={item} /></span>
            })}</div>
          <input style={{float:"right"}} type="button" value="Add post" onClick={addPost}/>
            {flag &&
            <div style={{width:"250px", borderStyle:"solid", padding:"1em"}}>
             <span>Title:</span>
             <input type="text" onChange={e=> setNewpost({...newpost, title: e.target.value})}/><br />
             <span>Body:</span>
             <input type="text" onChange={e=> setNewpost({...newpost, body: e.target.value})}/>
            <input type="button" value="Cencel" onClick={doNotAdd}/>
            <input type="button" value="Add" onClick={finishToAdd} />
            </div>
            }
            <br /><br /><br /><br />
                 
     
    </div>
  );
}

export default PostsComp;
