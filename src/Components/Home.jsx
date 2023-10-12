import React from "react";
import round from "../Images/story/Round.png";
import plus from "../Images/story/plus.png";
import video from "../Images/story/video.png";
import live from "../Images/story/live.png";
import main from "../Images/story/main.png";
import Post from "./Post/Post";
import FriendStory from "./Story/FriendStory";

const Home = () => {
  const storyOptions = [
    { icon: plus, text: "Story activity" },
    { icon: video, text: "Photo/Video" },
    { icon: live, text: "Live Video" },
  ];

  return (
    <section className="social_story my-4">
      <div className="row">
        <div className="col-md-6">
          <div className="story_info">
            <div className="write_story p-2 mt-2">
              <img src={round} alt="" />
              <input
                type="text"
                className="form-control"
                placeholder="What's on your mind?"
              />
            </div>
            <div className="story_icon mt-3 px-3">
              {storyOptions?.map((option, index) => (
                <div className="d-flex" key={index}>
                  <img src={option.icon} alt="" />
                  <p>&nbsp; {option.text}</p>
                </div>
              ))}
            </div>
          </div>

          <Post
            description="The greatest glory in living lies not in never falling, but in rising every time we fall.
          Nelson Mandela"
            comment={true}
          />
          <Post
            description="One of the perks of working in an international company is sharing knowledge with your colleagues"
            image={main}
            comment={false}
          />
        </div>
        <div className="col-md-3">
          <FriendStory />
        </div>
      </div>
    </section>
  );
};

export default Home;
