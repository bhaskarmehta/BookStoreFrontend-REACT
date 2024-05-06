import React from 'react'
import styles from  './Cards.module.css';
export default function Cards({data}) {
  return (
    <>
     <div>
     <div className={` cards ${styles.book_image} ${styles.grow_size_on_hover}`} style={{ width: '24rem' }}>
     <img src={data.image} class="card-img-top" alt="..."/>
     <div class="card-body">
    <h5 class="card-title">{data.name}</h5>
    <p class="card-text">{data.title}</p>
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <p style={{ marginRight: '50px' }}>₹ {data.price}</p>
    <button className={`btn btn-primary ${styles.change_color_on_hover}`}>Buy Book</button>
</div>
  </div>
</div>
     </div>
    </>
  )
}
