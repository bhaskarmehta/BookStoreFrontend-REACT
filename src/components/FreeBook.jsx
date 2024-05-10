import React, { useEffect, useState } from 'react'
import styles from './FreeBook.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';
export default function FreeBook() {

   const [freeBook,setFreeBook] = useState([]);

   useEffect(()=>{
    const getFreeBook = async()=>{
     try {
      //  const res =  await axios.get("http://localhost:4000/book"); // For Local
       const res = await axios.get("backend-svc.default:4000/book");
      //  console.log(res.data);
       setFreeBook(res.data);
     } catch (error) {
       console.log(error);
     }
    }
    getFreeBook();
  },[])

    const filterData  =  freeBook.filter((freeBook)=>freeBook.category==='Free');
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div className={`${styles.text_align}`}> 
        <h1>Free Offered Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure provident vero ex amet modi dolore.</p>
    </div>
    <div>
    <Slider {...settings}>
        {filterData.map((data)=>
           <Cards data = {data} key={data.id}/>
        )}
      </Slider>
    </div>
    </>
  )
}
