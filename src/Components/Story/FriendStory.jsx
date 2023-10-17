import React from "react";
import "./story.scss";
import image from "../../Images/story/plus.png";
import img1 from "../../Images/friends/Round (1).png";
import img2 from "../../Images/friends/Round (2).png";
import img3 from "../../Images/friends/Round (3).png";
import img4 from "../../Images/friends/Round (4).png";
import img5 from "../../Images/friends/Round.png";
import { Link } from "react-router-dom";
import Event from "../Event/Event";

const FriendStory = () => {
  
  const storyItems = [
    { image: img2, name: "Ameeera shen", time: "12 April at 09.28 PM" },
    { image: img5, name: "Mark Marson", time: "12 April at 09.28 PM" },
    { image: img2, name: "Salsabilla", time: "12 April at 09.28 PM" },
    { image: img3, name: "Morgan", time: "12 April at 09.28 PM" },
    { image: img4, name: "Anna Ananda", time: "12 April at 09.28 PM" },
    { image: img1, name: "Allen Anderson", time: "12 April at 09.28 PM" },

    { image: img3, name: "Morgan", time: "12 April at 09.28 PM" },
  ];
  return (
    <>
      <div className="frirnds_story">
        <h6>Friends Story</h6>
        <div className="create__story my-3">
          &nbsp; &nbsp; <img src={image} alt="" />
          <p className="mt-2">&nbsp; Create Your Story </p>
        </div>
        <div className="story_user mt-4">
          {storyItems?.map((item, index) => (
            <div className="friend_profile my-4" key={index}>
              <img src={item.image} alt="" />
              <div className="name mx-2">
                <h6 className="mb-0">{item.name}</h6>
                <p>{item.time}</p>
              </div>
            </div>
          ))} <hr className="hr" />
          <div className="mt-3 text-center">
          <Link to="/">See all stories</Link>
          </div>
        </div>
      </div>
      <Event />
    </>
  );
};

export default FriendStory;
