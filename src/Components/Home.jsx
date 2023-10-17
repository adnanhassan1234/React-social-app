import React, { useEffect, useState } from "react";
import round from "../Images/story/Round.png";
import plus from "../Images/story/plus.png";
import video from "../Images/story/video.png";
import live from "../Images/story/live.png";
import Post from "./Post/Post";
import FriendStory from "./Story/FriendStory";
import userData from "../../db.json";
import { ColorRing } from "react-loader-spinner";

const Home = () => {
  const [userContent, setUserContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchUserData = () => {
    const startIndex = (page - 1) * 3;
    const endIndex = startIndex + 3;
    const dataSlice = userData.users.slice(startIndex, endIndex);

    setTimeout(() => {
      setUserContent((prevContent) => [...prevContent, ...dataSlice]);
      setLoading(false);
    }, 2000);
  };

  const handelInfiniteScroll = () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        if (!loading) {
          setLoading(true);
          setPage((prev) => prev + 1);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, [loading]);

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
          <div className="row">
            {userContent.map((content, index) => (
              <div className="col-lg-12" key={content.id}>
                <Post {...content} />
              </div>
            ))}
          </div>
          {loading && (
            <div>
              <h1 className="mb-3 text-center" style={{ color: "red" }}>
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    "#2E78B6",
                    "#2E78B6",
                    "#2E78B6",
                    "#abbd81",
                    "#202020",
                  ]}
                />
              </h1>
            </div>
          )}
        </div>
        <div className="col-md-3">
          <FriendStory />
        </div>
      </div>
    </section>
  );
};

export default Home;
