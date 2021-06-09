import React from "react";
import { formatData } from "./index.utils";

const ProductInfo = ({ data }) => {
  return (
    <div className="success__content__respBox">
      {data &&
        formatData(data).map(({ name, value }, index) => (
          <div key={index} className="success__content__respBox__resp">
            <p className="success__content__respBox__resp__name" children={name} />
            <p className="success__content__respBox__resp__value" children={value} />
          </div>
        ))}
    </div>
  );
};
export default ProductInfo;
