import { useEffect, useState } from "react";
import { getList } from "../../api/productApi";
import useCustomMove from "../../hooks/useCustomMove";
import PageComponent from "../common/PageComponent";
import { createSearchParams, useSearchParams } from "react-router-dom";

const initState = {
  dtoList: [],
  pageNumList: [],
  pageRequestDTO: null,
  prev: false,
  next: false,
  totalCount: 0,
  prevPage: 0,
  nextPage: 0,
  totalPage: 0,
  current: 0,
};

const ListComponent = ({ tno }) => {
  const [serverData, setServerData] = useState(initState);
  const { page, size, moveToList } = useCustomMove();
  const [queryParams] = useSearchParams();

  const a = queryParams.get("a");
  const b = queryParams.get("b");

  useEffect(() => {
    getList({ page, size, a, b }).then((d) => {
      console.log(d);
      const { data } = d;
      setServerData(data);
    });
  }, [page, size]);

  const test = (i) => {
    console.log(i);
  };

  return (
    <div className="border-2 border-blue-100 mt-10 mr-2 ml-2">
      <div className="flex flex-wrap mx-auto justify-center p-6"></div>
      <PageComponent serverData={serverData} movePage={test} />
    </div>
  );
};

export default ListComponent;
