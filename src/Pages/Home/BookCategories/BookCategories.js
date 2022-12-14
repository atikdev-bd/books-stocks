import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../Shared/Loader/Loader";
import BookCategory from "./BookCategory";

const BookCategories = () => {
  const { data: booksCategories = [] , isLoading } = useQuery({
    queryKey: ["catagories"],
    queryFn: async () => {
      const res = await fetch("https://assignment-12-server-side-atikdev-bd.vercel.app/categories");
      const data = await res.json();
      return data;
    },
  });

  if(isLoading){
    return <Loader></Loader>
  }
  return (
    <>
      <div>
        <h1 className=" text-2xl lg:text-3xl text-center mt-14 mb-4 text-emerald-600 ">
          {" "}
          <span className=" style text-5xl font-bold">C</span>HOSE YOUR CATEGORIES
        </h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mx-3 lg:mx-4  mt-20 mb-10">
        {booksCategories.map((book) => (
          <BookCategory key={book._id} books={book}></BookCategory>
        ))}
      </div>
    </>
  );
};

export default BookCategories;
