import React from 'react';
import ReactDOM from 'react-dom';
import './health_blog.css';

function Design() {
  const [liked, setLiked] = React.useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="best-in-design">
      <h1>Understanding Cancer: Key Insights by Dr. Your Name</h1>
      <img src="" alt="Health Blog Image" />
      <p>This is a sample health blog post.</p>
      <button onClick={handleLike} className="like-button">
        {liked ? 'Unlike' : 'Like'}
      </button>
      <p> Likes: {liked ? 1 : 0} </p>
    </div>
  );
}

ReactDOM.render(<Design />, document.getElementById('root'));