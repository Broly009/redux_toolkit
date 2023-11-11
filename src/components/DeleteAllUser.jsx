import React from 'react'
import { useDispatch } from 'react-redux'
import { clearUser } from '../store/slices/userslice'

 const DeleteAllUser = () => {
 const dispatch=useDispatch()
 const delall=()=>{
   dispatch(clearUser())

 }
  return (
    <div>
      <button onClick={delall} className="btn add-btn"
       >delete all</button>
    </div>
  )
}
export default DeleteAllUser;
