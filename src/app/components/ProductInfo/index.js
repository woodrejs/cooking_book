import React from "react";
import { formatData } from "./index.utils";
import "./index.scss";

const ProductInfo = ({ data }) => {
  return (
    <div className="productInfo">
      {data &&
        formatData(data).map(({ name, value }, index) => (
          <div key={index} className="productInfo__content">
            <p
              className="productInfo__content__text productInfo__content__text--name"
              children={name}
            />
            <p
              className="productInfo__content__text productInfo__content__text--value"
              children={value}
            />
          </div>
        ))}
    </div>
  );
};
export default ProductInfo;
