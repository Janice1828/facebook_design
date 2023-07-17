import React, { useEffect, useState } from "react";
import axios from "axios";
import Contentnews from "../Home/Newsfeedcontent";
import { useQuery } from "@tanstack/react-query";

const DismissibleExample = () => {
  //     const response = await axios.get("https://fakestoreapi.com/products");
  const [data, setData] = useState([]);
  const getProduct = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setData(response.data);

    console.log("Test");
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      {console.log(data)}
      {data.map((val) => (
        <div key={val.id}>
          <Contentnews
            profilePicture={val.image}
            content={val.description}
            contentImage={val.image}
            like={val.rating.count}
            share={val.rating.rate}
            comment={val.price}
            name={val.category}
            time={val.id}
          />
        </div>
      ))}
    </>
  );
};

export default DismissibleExample;
