import axios from "axios";
import React, { useEffect } from "react";

const AddressList = () => {
  useEffect(() => {
    const f = async () => {
      const { data } = await axios.get(
        "http://localhost:8080/api/address/list"
      );
      console.log(data);
    };
    f();
  }, []);

  return <div>AddressList</div>;
};

export default AddressList;
