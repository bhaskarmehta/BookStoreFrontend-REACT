import React from 'react';
import styles from './Login.module.css';
import { Link ,useLocation, useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
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
            email:data.email,
            password: data.password,
          };
        // await axios.post("http://localhost:4000/user/login",userInfo) // For Local
        await axios.post("http://backend-svc.default.svc.cluster.local:4000/user/login",userInfo) // Running on K8s

      .then((res)=>{
        console.log(res.data);
        if(res.data){
          navigate(from,{replace:true});
          toast.success("Login Successfully");
          setTimeout(()=>{
            window.location.reload();
            localStorage.setItem("Users",JSON.stringify(res.data.user));
          },1000)
        }
      }).catch((error)=>{
        toast.error(error.response.data.message);
        setTimeout(()=>{
            window.location.reload();
        },1000);
      })
      };
    return(<>
            <div> 
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3>Login</h3>
                        <div>
                            <span>Email</span>
                            <input
                                className={`${styles.email} ${styles.input_box_size}`}
                                type="email"
                                placeholder='Enter Your Email'
                                {...register("email", { required: true })}
                            />
                        </div>
                        <div className={`${styles.password}`}>
                            <span>Password</span>
                            <input
                                className={`${styles.input_box_size}`}
                                type="password"
                                placeholder='Enter Your Password'
                                {...register("password", { required: true })}
                            />
                        </div>
                        <div className={`${styles.login_signup}`}>
                            <button className={`${styles.login_button}`} type='submit'>Login</button>
                            <p>Not registered? <span><Link to="/signup" >SignUp</Link></span></p>
                        </div>
                    </form>
            </div>
    </>)
}
    export default Login;

