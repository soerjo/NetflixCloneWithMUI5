import React from "react";
import FeatureComp from "../FeatureComp";
import { features } from "./listFeature";

const FeatureList = () => {
  return (
    <div>
      {features.map((feature, index) => {
        const { imageSrc, desc, title, CompPendukung } = feature;
        return (
          <FeatureComp
            key={index}
            imageSrc={imageSrc}
            CompPendukung={CompPendukung}
            desc={desc}
            title={title}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default FeatureList;
