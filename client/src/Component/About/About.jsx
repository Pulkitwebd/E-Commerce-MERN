import React from "react";
import classes from "./About.module.css";
import img from "../Assets/img1.jpeg";

const About = () => {
  return (
    <>
      <section className={classes.pageName}>
        <p>Home</p>
        <p>/</p>
        <p>About</p>
      </section>

      <section className={classes.imgAndDesc}>
        <div className={classes.imgBox}>
          <img src={img} alt="About website"></img>
        </div>
        <div className={classes.desc_Box}>
          <h2 className={classes.heading}>Our Story</h2>
          <div className={classes.divider}></div>
          <p className={classes.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
