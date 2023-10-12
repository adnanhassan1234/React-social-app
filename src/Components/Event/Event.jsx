import React from "react";
import "./event.scss";
import image from "../../Images/story/unsplash_9UVmlIb0wJU.png";
import img1 from "../../Images/story/1.png";
import img2 from "../../Images/story/2.png";
import Button from "../Button/Button";

const Event = () => {
  const eventItems = [
    { image: img1, label: "10 Events Invites" },
    { image: img2, label: "Mike’s Invitation Birthday" },
  ];

  return (
    <>
      <section className="event my-4">
        <h6>Events</h6>
        <hr className="hr" />
        {eventItems?.map((item, index) => (
          <div className="event_info " key={index}>
            <img src={item.image} alt={item.label} />
            <p>&nbsp; {item.label}</p>
          </div>
        ))}
      </section>
      <section className="suggest my-3">
        <div className="title p-1 pb-0">
          <h6>Suggested Pages</h6>
          <p>See All</p>
        </div>
        <hr className="hr" />
        <h6>Sebo Studio</h6>
        <p>Digital Product Studio</p>
        <img className="mb-3" src={image} width="100%" alt="" />
        <Button title="Follow" />
      </section>
    </>
  );
};

export default Event;
