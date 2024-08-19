import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard';
import axios from 'axios';

const HealthBlog = () => {
  const [Data,setData] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/Blog')
    .then((value)=>{
      setData(value.data);
    })

  },[])


  return (
    <div>
      <header className='header'><h1>Welcome to Our Health Blog</h1></header>
      <div className='container'>
        {Data.length&&Data.map((item,index)=>{
          return ( <BlogCard item={item} key={index} />)
        })}
      </div>

      
    </div>
  
  )
}

export default HealthBlog
