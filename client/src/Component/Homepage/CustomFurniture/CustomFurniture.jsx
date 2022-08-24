import React from "react";
import { FaCompass, FaDirections , FaHistory } from "react-icons/fa";
import classes from "./CustomFurniture.module.css";

const CustomFurniture = () => {
  return (
    <section className={classes.CustomFurnitureBox}>
      <div className={classes.heading_desc_Box}>
        <div className={classes.heading_box}>
          <h2>Custom Furniture Built Only For You</h2>
        </div>
        <div className={classes.desc_box}>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </article>
        </div>
      </div>
      <div className={classes.threeBoxes}>
        <div className={classes.boxInnerPart}>
          <FaCompass className={classes.logo} />
          <p className={classes.boxheading}>Mission</p>
          <p className={classes.boxPara}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit
            autem unde numquam nisi
          </p>
        </div>

        <div className={classes.boxInnerPart}>
          <FaDirections className={classes.logo} />
          <p className={classes.boxheading}>Vision</p>
          <p className={classes.boxPara}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit
            autem unde numquam nisi
          </p>
        </div>

        <div className={classes.boxInnerPart}>
          <FaHistory className={classes.logo} />
          <p className={classes.boxheading}>History</p>
          <p className={classes.boxPara}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit
            autem unde numquam nisi
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomFurniture;
