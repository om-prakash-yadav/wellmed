import React, { useState } from 'react'
import './HealthBlog.css'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const BlogCard = ({item,index}) => {
const [likes ,setLikes] =useState(0);
const [liked, setLiked] = useState(false);

const handleLikeClick = () => {
  if (liked) {
    setLikes(likes - 1);
  } else {
    setLikes(likes + 1);
  }
  setLiked(!liked);
};



  return (
<div className="cd">
  <div className="ie">
    <img src={item.blogImage} className="imgsrc" alt="..." />
  </div>
  <div className="ct">
    <div className="cay">
      <h2 className="cale">{item.title}</h2>
      <p className="carrt">{item.blog}</p>
      <p className="catttr"><small className="nn">{item.doctorName}</small></p>
      <div className="like-section">
        <div className='like' onClick={handleLikeClick}>
          {(liked) ? <FaHeart /> : <FaRegHeart /> }
        </div>
        <span>{likes} Likes</span>
      </div>
    </div>
  </div>
</div>



  )
}

export default BlogCard
