import React from 'react'
import styles from './SignUp.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

function SignUp() {
 const location = useLocation(); // To get current Location
 const navigate = useNavigate();
 const from = location.state?.from?.pathname  || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm();
    const onSubmit = async(data) => {
        const userInfo = {
          username: data.username,
          email:data.email,
          password: data.password,
        };
    // await axios.post("http://localhost:4000/user/signup",userInfo) //For Local
    await axios.post("http://backend-svc:4000/user/signup",userInfo)  // Running on K8s Cluster with Backend Service name backend-svc
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        navigate(from,{replace:true});
        toast.success("SignUp Successfully");
        setTimeout(()=>{
          window.location.reload();
          localStorage.setItem("Users",JSON.stringify(res.data.user));
        },1000)
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user));
    }).catch((error)=>{
      toast.error(error.response.data.message);
      setTimeout(()=>{},1000);
    })
    };

  return (
    <>
      <div className={`${styles.signup_form}`} id='signup_modal'>
        <div>
          <h3>SignUp</h3>
            <Link to="/" className={`${styles.cross_button}`}>X</Link>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div>
              <span>Name</span>
              <input className={`${styles.name} ${styles.input_box_size}`} type="text"  placeholder='Enter Your Name' 
                {...register("username", { required: true })}
              />
            </div>
            <div>
              <span>Email</span>
              <input className={`${styles.email} ${styles.input_box_size}`} type="email" placeholder='Enter Your Email' 
              {...register("email", { required: true })}
              />
            </div>
            <div className={`${styles.password}`}>
              <span>Password</span>
              <input className={`${styles.input_box_size}`} type="password" placeholder='Enter Your Password'
              {...register("password", { required: true })}
              />
            </div>
            <div className={`${styles.login_signup}`}>
                <button className={`${styles.signup_button}`} type="submit">SignUp</button>
                <p>Have Account? <span><Link to='/login' className={`${styles.login_in_signup}`} >Login</Link>
                </span></p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp