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
      <h1>Understanding Cancer: Key Insights by Dr. Anish Shah</h1>
      <img src="asset/cancer.jpg" alt="Health Blog Image" />
      <p>Cancer is a disease characterized by uncontrolled cell growth, affecting various body parts. Common types include carcinomas, sarcomas, leukemias, and lymphomas. Causes involve genetic mutations, lifestyle factors (like smoking and diet), environmental exposures, and age. <br/>

Symptoms vary but often include weight loss, fatigue, pain, skin changes, lumps, and changes in bowel or bladder habits. Early detection through screenings like mammograms, Pap smears, colonoscopies, and PSA tests is crucial for effective treatment. <br/>

Treatment options, depending on cancer type and stage, include surgery, radiation, chemotherapy, immunotherapy, and targeted therapy. Living with cancer requires staying informed, seeking support, maintaining a healthy lifestyle, and communicating with healthcare providers. <br/>

Advances in research are improving outcomes. Early detection, a healthy lifestyle, and support are essential. As a medical professional, I am committed to providing care and support. Remember, you are not alone—hope and help are available. <br/>

<b>Dr. Anish Shah</b> is a <b>Cancer Specialist</b> with over <b>14</b> years of experience in treating cancer patients, dedicated to advancing cancer treatment and providing compassionate support.</p>
      <button onClick={handleLike} className="like-button">
        {liked ? 'Unlike' : 'Like'}
      </button>
      <p> Likes: {liked ? 1 : 0} </p>
    </div>
  );
}

export default Design