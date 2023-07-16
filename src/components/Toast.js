import React from "react";
import axios from "axios";
import Contentnews from "../Home/Newsfeedcontent";
import { useQuery } from "@tanstack/react-query";

const DismissibleExample = () => {
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = await response.data;
      console.log(data);
      return data;
    },
  });
  if (postQuery.isLoading) return <h1>Loading....</h1>;
  if (postQuery.isError) return <h1>Error loading data!!!</h1>;
  return (
    <>
      {console.log(postQuery.data)}
      {postQuery.data.map((val) => (
        <div key={val.id}>
          <Contentnews
            profilePicture={val.image}
            content={val.description}
            contentImage={val.image}
            like={val.count}
            share={val.rate}
            comment={val.price}
            name={val.category}
          />
        </div>
      ))}
    </>
  );
};

export default DismissibleExample;
