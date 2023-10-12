import React from "react";
import heart from "../../Images/story/Heart solid icon.png";
import comment from "../../Images/story/Comment stroke icon.png";
import vector from "../../Images/story/Vector.png";
import "./post.scss";

const PostProfile = (props) => {
  const postOptions = [
    { icon: heart, text: "129k Likes", color: "#CE395F" },
    { icon: comment, text: "25 Comments" },
    { icon: vector, text: "215 Shares" },
  ];

  return (
    <div>
      <div className="post_info">
        <img src={props.image} alt="" />
        <div className="user mx-2">
          <h6>{props.title}</h6>
          <p className="time">{props.time}</p>
        </div>
      </div>
    </div>
    
  );
};

export default PostProfile;
