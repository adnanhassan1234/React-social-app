import React from "react";
import classes from "./index.module.scss";
import Nav from "../Nav/Nav";
import RightSideBar from "../RightSideBar/RightSideBar";

const Sidebar = () => {
    return (
        <>
            <aside className={classes.sidebar}>
                <Nav />
            </aside>
            <aside className={classes.rightSideBar}>
                <RightSideBar />
            </aside>
        </>
    )
}

export default Sidebar;