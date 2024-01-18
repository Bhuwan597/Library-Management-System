import React from "react";
import MyBooksTable from "../components/MyBooksTable";

const Page = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full md:w-3/4">
          <MyBooksTable />
        </div>
      </div>
    </>
  );
};

export default Page;
