import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListPage = () => {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    const f = async () => {
      const { data } = await axios.get("http://localhost:8080/todo/list");
      console.log(data);
      setListData(data);
    };
    f();
  }, []);

  return (
    <div className="p-4 w-full bg-orange-200">
      <div className="text-3xl font-extrabold">Todo List Page components</div>
      {listData &&
        listData.map((i) => (
          <div>
            {i.korea},{i.math},{i.eng}
            <Link to={`/todo/read/${i.sno}`} className="bg-red-50" />
          </div>
        ))}
    </div>
  );
};

export default ListPage;
