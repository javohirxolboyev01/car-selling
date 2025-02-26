import React from "react";
import { useGetData } from "../../hooks/useGetData";
import { categoryImage } from "../../utils/source";
// import { fetch_data } from "../../data";

const Home = () => {
  const { isLoading, data } = useGetData("/getCategory");

  const { isLoading: isLoadingProduct, data: products } = useGetData("/getCar");

  const loading = isLoading || isLoadingProduct;

  return (
    <div className="py-15">
      <div>
        {/* content section */}
        <div>
          <h1 className="text">Modellar</h1>
        </div>
        <div>
          {categoryImage.map((value) => (
            <div className="categoryImg">
              <img className="image" src={value.src} />
            </div>
          ))}
          <div className="category">
            {loading && <h2>Loading...</h2>}

            {data?.map((categ) => (
              <div className="serverTitle" key={categ?._id}>
                <h1>{categ?.brendName}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
