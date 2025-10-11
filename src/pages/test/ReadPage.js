import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadPage = () => {
  const [snoData, setSnoData] = useState({});
  const { sno } = useParams();
  console.log(sno);
  useEffect(() => {
    const f = async () => {
      const { data } = await axios.get(
        `http://localhost:8080/todo/read/${sno}`
      );
      console.log(data);
      setSnoData(data);
    };
    f();
  }, []);

  return (
    <div className="text-3xl font-extrabold">
      ReadPage
      <div>
        {snoData.korea},{snoData.math},{snoData.eng}
      </div>
    </div>
  );
};

export default ReadPage;
