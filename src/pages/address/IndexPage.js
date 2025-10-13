import React, { useCallback } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

const IndexPage = () => {
  const navigate = useNavigate();
  const handleClickAdd = useCallback(() => {
    navigate({ pathname: "add" });
  });
  return (
    <BasicLayout>
      <div className="text-black font-extrabold mt-10">Address Menu</div>
      <div
        className="text-xl m-1 p-2 w-20 font-extrabold text-center underline"
        onClick={handleClickAdd}
      >
        추가
      </div>
      <div className="flex flex-wrap w-full">
        <Outlet />
      </div>
    </BasicLayout>
  );
};

export default IndexPage;
