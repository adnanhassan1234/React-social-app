import React, { useState, useEffect } from "react";
import "./post.scss";
import heart from "../../Images/story/Heart solid icon.png";
import unlike from "../../assets/images.png";
import commentIcon from "../../Images/story/Comment stroke icon.png";
import vector from "../../Images/story/Vector.png";
import { BiSolidSend } from "react-icons/bi";

const Post = (props) => {
  const {
    name,
    description,
    image,
    profileImage,
    createdDate,
    comments,
    share,
  } = props || {};

  const [newComment, setNewComment] = useState("");
  const [commentList, setCommentList] = useState(
    Array.isArray(comments) ? comments : []
  );
  const [isLiked, setIsLiked] = useState(false); // Added state for like status

  useEffect(() => {
    if (!Array.isArray(comments)) {
      setCommentList([comments]);
    }
  }, [comments]);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      setCommentList((prevComments) => [...prevComments, newComment]);
      setNewComment("");
    }
  };

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const postOptions = [
    {
      icon:  `${isLiked ? heart  : unlike}`,
      text: `${isLiked ? "Unlike" : "Like"}`,
      color: isLiked ? "#CE395F" : undefined,
    }, 
    { icon: commentIcon, text: `${commentList.length} Comments` },
    { icon: vector, text: `${share} Shares` },
  ];

  return (
    <>
      <section className="post my-3">
        <div className="post_info">
          <img src={profileImage} alt="" />
          <div className="user mx-2">
            <h6>{name}</h6>
            <p className="time">{createdDate}</p>
          </div>
        </div>
        <p className="mb-2">
          {description}
          <img src={image} className="mt-3" width="100%" alt="" />
        </p>
        <div className="comments px-2">
          {postOptions?.map((option, index) => (
            <div className="d-flex" key={index}>
              <img src={option.icon} alt="" />
              <p style={{ color: option.color }}>&nbsp; {option.text}</p>
            </div>
          ))}
        </div>
        <div onClick={handleLikeClick} className="heart">
          <img src={heart} width={27} alt="" />
        </div>
        <hr className="hr" />
        <div className="comments-conaitner">
          {commentList.map((comment, index) => (
            <div className="d-flex comment ms-2" key={index}>
              <img src={profileImage} width={25} height={25} alt="" /> &nbsp;
              <span>{comment}</span>
            </div>
          ))}
        </div>
        <div className="comment-input write_story p-2">
          <input
            type="text"
            value={newComment}
            className="form-control"
            onChange={handleCommentChange}
            placeholder="Write a comment..."
          />
          <div onClick={handleCommentSubmit}>
            <BiSolidSend className="send_icon" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Post;
