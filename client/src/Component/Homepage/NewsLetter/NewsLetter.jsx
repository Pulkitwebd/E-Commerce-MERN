import React from "react";
import classes from "./NewsLetter.module.css";

const NewsLetter = () => {
  return (
    <section className={classes.NewsLetter}>
      <div className={classes.heading}>
        <h2>Join our newsletter and get 20% off</h2>
      </div>
      <div className={classes.paraInput_box}>
        <div>
          <p className={classes.para}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore?
          </p>
        </div>
        <div className={classes.inputBox}>
          <input placeholder="Enter Email"></input>
          <button>Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
