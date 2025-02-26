import React from "react";
import { useGetData } from "../../hooks/useGetCategory";
import { aboutImage } from "../../utils/about";

const About = () => {
  const { isLoading, data } = useGetData("/getCategory");

  const { isLoading: isLoadingProduct, data: products } = useGetData("/getCar");

  const loading = isLoading || isLoadingProduct;

  return (
    <div>
      {aboutImage.map((value) => (
        <div className="images2">
          <img src={value.src} />
          <h1 className="font-bold">{value.title}</h1>
          <p>{value.paragreph}</p>
        </div>
      ))}

      <div>
        {products?.cars?.map((cars) => (
          <div key={cars?._id}>{cars?.carName}</div>
        ))}
      </div>
    </div>
  );
};

export default About;
