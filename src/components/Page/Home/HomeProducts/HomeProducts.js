import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../Layout/Loading";
import PrimaryHeadline from "../../../Layout/PrimaryHeadline/PrimaryHeadline";
import HomeProduct from "./HomeProduct";

const HomeProducts = () => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery("products", () =>
    fetch("http://localhost:5000/product").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  console.log(products);
  return (
    <div className="container mx-auto">
      <PrimaryHeadline title="Our Products" />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {products.slice(0, 3).map((product) => (
          <HomeProduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
