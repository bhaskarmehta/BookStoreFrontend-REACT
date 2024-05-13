import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';
import FreeBook from '../components/FreeBook.jsx';

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <FreeBook></FreeBook>
      <Footer></Footer>
    </>
  )
}

export default Home