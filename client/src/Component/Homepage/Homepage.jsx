import React from "react";
import CustomFurniture from "./CustomFurniture/CustomFurniture";
import FeatureProduct from "./FeatureProduct/FeatureProduct";
import DesignComfort from "./DesignComfort/DesignComfort";
import NewsLetter from "./NewsLetter/NewsLetter";
import classes from "./Homepage.module.css";

const Homepage = () => {
  return (
    <main className={classes.homepage}>
      <DesignComfort />
      <FeatureProduct />
      <CustomFurniture />
      <NewsLetter />
    </main>
  );
};

export default Homepage;
