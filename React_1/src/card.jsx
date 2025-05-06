import { useState } from "react";

export default function Card(props) {
  const [likeCount, setLikeCount] = useState(0); 
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeToggle = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="card">
      <img src={props.img} alt={`${props.name} ${props.clan}`} />
      <p>{props.name} {props.clan}</p>
      <p>Anime name: {props.anime}</p>
      <p>Likes: {likeCount}</p>
      <button onClick={handleLikeToggle}>
        {isLiked ? "Liked" : "Like"}
      </button>
    </div>
  );
}
