import styles from "./Banner.module.css";


import React from 'react'

export default function Banner() {
  return (
    <>
    <div className={`${styles.flex_container}`}>
      <div>
        <h1>Hello, welcomes here to learn something <span className={`${styles.pink}`}>new everyday!!!</span></h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores recusandae incidunt, architecto aperiam ducimus nulla porro ea nihil sequi perspiciatis suscipit? Iure ab eum, dolore omnis vitae quisquam placeat veritatis.
        </p>
        <div class="input-group flex-nowrap">
        <input type="text" class="form-control" placeholder="Enter your email to login" />
        </div>
        <button type="button" class="btn btn-secondary">Login</button>
      </div>
      <div>
          <img src="/bookBanner.jpg" alt="Book Banner" />
        </div>
    </div>
    </>
  )
}
