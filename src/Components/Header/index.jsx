import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import classes from "./index.module.scss";
import profile from "../../Images/header/Round.png";
import notification from "../../Images/header/notification.png";
import dark from "../../Images/header/dark.png";

const Header = (props) => {
  return (
    <div className={`${classes.Header}`}>
      <header id={classes.header}>
        <div className={classes.headerRight}>
          <div className="d-flex">
          
            <div className={classes.headerIcons}>
              <img src={notification} width={30} alt="" />
              <img src={dark} width={30} alt="" />
              <img src={profile} width={30} alt="" />
              <span className="ms-2">Katie</span>
            </div>
          </div>
        </div>
        <Form>
        <InputGroup>
          <Form.Control
            placeholder="Search.."
            aria-label="Username"
            aria-describedby="basic-addon1"
            className={classes.inputSearch}
          />
          <InputGroup.Text id="basic-addon1">
            <i className="fa fa-search"></i>
          </InputGroup.Text>
        </InputGroup>
      </Form>
        <div className={classes.headerRight}>
          <h3 className={classes.logo}>LOGO HERE</h3>
        </div>
      </header>
    </div>
  );
};

export default Header;
