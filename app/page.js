'use client'
import axios from 'axios'
import React, { useState } from 'react'

const page = () => {
  const [Images , SetImages] = useState([]);
  const getImages = async ()=>{
      try {
        const response = await axios.get("https://picsum.photos/v2/list");
        const data = response.data;
        SetImages(data);
        // console.log(Images);
      } catch (error) {
        console.log(error);
      }
  }
  return (
  <>
    
    <div className='p-10 m-2 bg-lime-100'>
  
      {
        Images.map((elem,i) =>{
          console.log(i);
          return <img
          className='m-10 rounded inline-block'
          key = {i} 
          src={elem.download_url}
          width={300}
          height={200}
          margin = {2} 
          />
        })
      }
    </div>
    <button onClick={getImages} className='px-5 py-3  bg-green-600 text-white'>Get Images</button>
  </>
  )
}

export default page
