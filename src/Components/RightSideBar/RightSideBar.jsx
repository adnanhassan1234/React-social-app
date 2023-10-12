import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./rightSideBar.scss";
import img1 from "../../Images/friends/Round (1).png";
import img2 from "../../Images/friends/Round (2).png";
import img3 from "../../Images/friends/Round (3).png";
import img4 from "../../Images/friends/Round (4).png";
import img5 from "../../Images/friends/Round.png";
import Button from "../Button/Button";

const RightSideBar = () => {
  const friendItems = [
    { image: img5, name: "Mark Marson", time: "15 min" },
    { image: img2, name: "Salsabilla" },
    { image: img3, name: "Morgan" },
    { image: img4, name: "Anna Ananda", time: "9 min" },
    { image: img1, name: "Allen Anderson" },
  ];

  const groupItems = [
    { name: "Web Designer", label: "WD", color: "#63B3BF" },
    { name: "Allen Anderson", label: "TI", color: "#F9837C", online: "online" },
    { name: "Allen Anderson", label: "C", color: "#F3CC5C", online: "online" },
  ];

  return (
    <>
      <section className="friends">
        <h5 className="mt-3">FRIENDS</h5>
        <ul>
          {friendItems?.map((item, index) => (
            <li key={index}>
              <div className="friend_profile my-4">
                <img src={item.image} alt="" />
                <span>
                  &nbsp; {item.name}
                  <span className="time"> &nbsp; {item.time}</span>
                </span>
              </div>
            </li>
          ))}
          <li className="my-3">
            <br />
            <h6 className="my-4">GROUP CHAT</h6>
          </li>
          {groupItems?.map((item, index) => (
            <li key={index}>
              <div className="friend_profile d-flex my-4">
                <span className="label" style={{ backgroundColor: item.color }}>
                  {item.label}{" "}
                </span>
                <span> &nbsp; {item.name} &nbsp; </span>
                <div className={item.online}></div>
              </div>
            </li>
          ))}
          <div className="friend_btn">
            <Button title="Write new message" />
          </div>
        </ul>
      </section>
    </>
  );
};

export default RightSideBar;
