import {useEffect} from 'react'
import {useState} from 'react'
import axios from 'axios'


const OtherDataComp=(props)=> {

  //const [userOtherData,setUserOtherData] = useState({})
  
   /*useEffect(()=>{
       async function f1 (){
        let userData = await axios.get('https://jsonplaceholder.typicode.com/users/'+props.id)
        setUserOtherData(userData.data);
       
      }
       f1()
   })*/

    return (<div>
    
Street: <input type="text" value={props.data.street}/> <br/>
City: <input type="text" value={props.data.city}/> <br/>
ZipCode: <input type="text" value={props.data.zipcode}/> 

    </div>
  );
}

export default OtherDataComp;
