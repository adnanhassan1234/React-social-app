import React from "react";
import classes from "./index.module.scss";
import Sidebar from "../../Components/sidebar";
import Header from "../../Components/Header";


const MainLayout = ({ children }) => {
  return (
    <>
    <Header />
    <div className={classes.wrapper}>
      <main className={classes.mainBox}>
          <Sidebar />
          <div className={classes.mainContainer}>
              {children}
          </div>
      </main>
    </div>
    </>
  );
};

export default MainLayout;
