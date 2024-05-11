import React, { useEffect, useState } from 'react';
import styles from './Course.module.css';
// import list from '../../public/list.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Course() {

   const [book,setBook] = useState([]);

   useEffect(()=>{
     const getBook = async()=>{
      try {
        // const res =  await axios.get("http://localhost:4000/book"); //For Local
        const res =  await axios.get("http://backend-svc.default.svc.cluster.local:4000/book"); // For K8s Cluster
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
     }
     getBook();
   },[])
    const filterData  =  book.filter((freeBook)=>freeBook.category!=='Free');
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
     <div className={`${styles.margin_to_navbar}`}>
        <div>
            <h1>We are delighted to have you <span className={`${styles.span_pink}`}>Here!:)</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus molestiae corrupti voluptate.
                 Itaque architecto distinctio optio voluptatum omnis obcaecati dolor a voluptatem qui ipsam, 
                 impedit deserunt quia quas quidem. Cum.</p>
            <Link to="/">
                  <button className={`${styles.back_button}`}>Back</button> 
            </Link>    
        </div>
    <Slider {...settings}>
        {filterData.map((data)=>
           <Cards data = {data} key={data.id}/>
        )}
      </Slider>
    </div>
    </>
  )
}

export default Course