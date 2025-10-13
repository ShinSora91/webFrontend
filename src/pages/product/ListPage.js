import React from "react";
import ListComponent from "../../components/products/ListComponent";
// import PageComponent from "../../components/common/PageComponent";

const ListPage = () => {
  return (
    <div className="w-full border border-solid border-neutral-300 shadow-md">
      <div className="text-2xl m-4 font-extrabold">List Page Components</div>
      <ListComponent />
    </div>
  );
};

export default ListPage;
