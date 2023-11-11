import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { AiFillDelete } from "react-icons/ai";
import { removeUser } from '../store/slices/userslice';

const Displayusers = () => {
    const value=useSelector((state)=>{
        return state.users
    })
const dispatch=useDispatch();
    const deluser=(id)=>{
        dispatch(removeUser(id))
    }
    
  return (
    
  value.map((user,id)=>{
    return <li key={id}>
       {user}
       <button onClick={()=>{deluser(id)}} className=' btn delete'><AiFillDelete className='delete-icon'/></button>
    </li>
    }
  )
 

  
  )
}

export default Displayusers