import React from "react";
import classes from "./DesignComfort.module.css";
import img1 from "../../Assets/img1.jpeg";
import img2 from "../../Assets/img2.jpeg";
import { Link } from "react-router-dom";

const DesignComfort = () => {
  return (
    <section className={classes.designYourComfortBox}>
      <article className={classes.desc_box}>
        <h1 className={classes.designComfort_heading}>
          Design Your Comfort Zone
        </h1>
        <p className={classes.designComfortpara}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>

        <Link to="/products">
          <button className={classes.shopNowBtn}>SHOP NOW </button>
        </Link>
      </article>

      {/* need to improve css */}
      <article className={classes.designComfort_ImagesBox}>
        <div className={classes.carpentar_ImgBox}>
          <img src={img2} alt="carpenter"></img>
        </div>
        <div className={classes.chairTable_ImgBox}>
          <img src={img1} alt="chair and table"></img>
        </div>
      </article>
    </section>
  );
};

export default DesignComfort;
