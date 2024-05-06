import React from 'react'
import styles from './Contact.module.css';
import { useForm } from 'react-hook-form';

function Contact() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
        const onSubmit = (data) => {
            console.log("Form submitted:", data);
        };
  return (
    <>
       <div className={`${styles.signup_form}`}>
        <div>
          <h3>Contact Us</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div>
              <span>Name</span>
              <input className={`${styles.name} ${styles.input_box_size}`} type="text"  placeholder='Enter Your Name' 
                {...register("name", { required: true })}
              />
            </div>
            <div>
              <span>Email</span>
              <input className={`${styles.email} ${styles.input_box_size}`} type="email" placeholder='Enter Your Email' 
              {...register("email", { required: true })}
              />
            </div>
            <div className={`${styles.mobile}`}>
              <span>Mobile Number</span>
              <input className={`${styles.input_box_size}`} type="text" placeholder='Enter Your Mobile Number'
              {...register("mobile", { required: true })}
              />
            </div>
            <div className={`${styles.login_signup}`}>
                <button className={`${styles.signup_button}`} type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact