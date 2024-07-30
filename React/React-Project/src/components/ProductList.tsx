import React, { useState, useEffect } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<String[]>([]);
  useEffect(() => {
    console.log("Fetching products in category: ", category);
    setProducts(["Clothing", "HouseHold"]);
  }, [category]);

  return <div>ProductList</div>;
};

export default ProductList;
