

const PostComp=(props)=> {


    return (<div style={{width:"300px", borderStyle:"solid", margin:"5px", padding:"0.5em"}}>

             **Title:**{' '+props.post.title}<br/>
             **Body:**{' '+props.post.body}<br />
       
             
               
           
     
    </div>
  );
}

export default PostComp;
