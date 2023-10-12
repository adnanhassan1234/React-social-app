import React from "react";
import round from "../../Images/story/Round (1).png";
import round1 from "../../Images/story/Round.png";
import "./post.scss";
import PostProfile from "./postProfile";
import heart from "../../Images/story/Heart solid icon.png";
import comment from "../../Images/story/Comment stroke icon.png";
import vector from "../../Images/story/Vector.png";
import like from "../../Images/story/like (1) 1.png";
import happy from "../../Images/story/happy.png";
import pluss from "../../Images/story/pluss.png";

const Post = (props) => {
  // console.log(props)
  const postOptions = [
    { icon: heart, text: "129k Likes", color: "#CE395F" },
    { icon: comment, text: "25 Comments" },
    { icon: vector, text: "215 Shares" },
  ];
  return (
    <>
      <section className="post my-4">
        <PostProfile
          title="Jorn Buston"
          time="12 April at 09:28 PM"
          image={round}
        />
        <p className="mb-2">
          {props.description}
          <img src={props.image} className="mt-3" width="100%" alt="" />
        </p>
        <div className="comments px-2">
          {postOptions?.map((option, index) => (
            <div className="d-flex" key={index}>
              <img src={option.icon} alt="" />
              <p style={{ color: option.color }}>&nbsp; {option.text}</p>
            </div>
          ))}
        </div>
        {props.comment && <hr className="hr" />}
        {props.comment && (
          <>
            <h6 className="view mb-4">View 24 comments before</h6>
            <PostProfile
              title="Jorn Buston"
              time="My all-time favorite quote"
              image={round}
            />
            <div className="story_info">
              <div className="write_story p-2">
                <img src={round1} alt="" />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write comment..."
                />
                <img src={like} alt="" />
                <img src={happy} alt="" />
                <img src={pluss} alt="" />
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Post;
