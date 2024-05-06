import React, { useState } from 'react'
import toast from 'react-hot-toast';

function Logout() {
    const [authUser,setAuthUser] = useState();

    const handleLogout = () =>{
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users");
            toast.success("Logout Successfully");
            setTimeout(()=>{
              window.location.reload();
            },1000)
        } catch (error) {
            toast.error("Error "+ error.message);
            setTimeout(()=>{},1000);
        }
    }
  return (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Logout