import React from 'react';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import { useAuth } from '../context/AuthProvider.jsx';

const Navbar = ()=>{
    const [scrolled,setScrolled]=useState(false);
    const [authUser,setAuthUser] = useAuth();
    // console.log(authUser);

    useEffect(()=>{
     const handleScroll = ()=>{
     if(window.scrollY>0){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }
      window.addEventListener('scroll', handleScroll) // Whenever someone scrolls the window in Y axis direction then ScrollY event occurs
      // and then handleScroll method gets called.

      return ()=>{
        window.removeEventListener('scroll',handleScroll);
      }

    },[scrolled]);


    return (<>
    <nav className= {`${styles.sticky} ${scrolled ? styles.scrolled : ''}`}>
    <div className={`${styles.navbar_left}`}>
        <h1>BookStore</h1>
    </div>
    <div className={`${styles.navbar_right}`}>
        <Link to="/">Home</Link>
        <Link to="/course">Course</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <input type="text" className={`${styles.search_field}`} placeholder="Search"/>
        {authUser ? (
        <Logout />
      ) : (
        <>
          <Link to='/login'>Login</Link>
        </>
      )}
       </div>
</nav>
  {/* <nav className={`navbar navbar-expand-lg ${styles.sticky} ${scrolled ? styles.scrolled : ''}`}>
  <div class="container-fluid">
    <Link class={`navbar-brand ${styles.bookStore}`} to="bookstore">BookStore</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0 ms-auto me-5">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/course">Course</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/contact">Contact</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/about">About</Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
       <input class={`form-control me-2 ${styles.search_input}`} type="search" placeholder="Search" aria-label="Search"/>
        {authUser ? (
        <Logout />
      ) : (
        <>
          <button className="btn btn-outline-success" onClick={() => document.getElementById("login_modal").showModal()}>Login</button>
          <Login />
        </>
      )}
      </form>
    </div>
  </div>
</nav> */}
    </>)
}

export default Navbar;