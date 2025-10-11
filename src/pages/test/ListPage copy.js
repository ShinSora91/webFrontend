import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ListPage = () => {
  const [queryParmas] = useSearchParams();
  const page = queryParmas.get("page") ? parseInt(queryParmas.get("page")) : 1;
  const size = queryParmas.get("size") ? parseInt(queryParmas.get("size")) : 10;
  const math = queryParmas.get("math") ? parseInt(queryParmas.get("math")) : 10;
  const eng = queryParmas.get("eng") ? parseInt(queryParmas.get("eng")) : 10;
  const korea = queryParmas.get("korea")
    ? parseInt(queryParmas.get("korea"))
    : 10;

  const calcGrade = (i) => {
    var r = "";
    if (i >= 90) r = "수";
    else if (i >= 80) r = "우";
    else if (i >= 70) r = "미";
    else if (i >= 60) r = "양";
    else r = "가";
    return r;
  };
  console.log(page, size);
  const total = math + eng + korea;
  const avg = total / 3.0;
  const [score] = useState({
    math,
    korea,
    eng,
    total,
    avg,
    grade: calcGrade(avg),
  });

  // let grade = "";
  // if (avg >= 90) grade = "수";
  // else if (avg >= 80) grade = "우";
  // else if (avg >= 70) grade = "미";
  // else if (avg >= 60) grade = "양";
  // else grade = "가";

  // console.log(math, eng, korea, total, avg, grade);
  // const list = [math, eng, korea, total, avg, grade];

  return (
    <div className="p-4 w-full bg-orange-200">
      <div className="text-3xl font-extrabold">
        Todo List Page components
        {/* <div>
          {list.map((i, idx) => (
            <div key={idx}>{i}</div>
          ))}
        </div> */}
        <div>
          {score.math},{score.korea},{score.eng},{score.total},{score.avg},
          {score.grade}
        </div>
      </div>
    </div>
  );
};

export default ListPage;
