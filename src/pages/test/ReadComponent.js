import React, { useEffect, useState } from "react";
import { getOne } from "../../api/todoApi";
import { f, makeDiv, tasks } from "../../utils/autocss";

const initState = {
  tno: 0,
  title: "",
  writer: "",
  dueDate: null,
  complete: false,
};

const ReadComponent = ({ tno }) => {
  const [todo, setTodo] = useState(initState);

  useEffect(() => {
    getOne(tno).then((data) => {
      console.log("data", data);
      setTodo(data);
    });
  }, [tno]);

  //선생님 방식
  // let result = { tno: [], title: [], writer: [], complete: [], dueDate: [] };
  // const keys = ["tno", "title", "writer", "complete", "dueDate"];
  // tasks.map((j) => {
  //   keys.map((i) => result[i].push(j[i]));
  // });

  //ObjectKeys방식
  let result = { tno: [], title: [], writer: [], complete: [], dueDate: [] };
  let keys = [];
  for (let i = 0; i < 100; i++) {
    keys = Object.keys(tasks[i]);
    console.log("keys", keys);
  }
  const tt = tasks.map((j) => {
    return keys.map((i) => {
      return result[i].push(j[i]);
    });
  });
  console.log("ObjectKeys방식", result);

  //내가 쓴 방식
  let titleArr = tasks.map((i) => i.title);
  let completeArr = tasks.map((i) => i.complete);
  let dueDateArr = tasks.map((i) => i.dueDate);
  let tnoArr = tasks.map((i) => i.tno);
  let writerArr = tasks.map((i) => i.writer);

  let obj = {
    complete: completeArr,
    dueDate: dueDateArr,
    title: titleArr,
    tno: tnoArr,
    writer: writerArr,
  };
  console.log("obj", obj);

  //신영님의 reduce 방식
  const keyArr = ["complete", "tno", "title", "writer", "dueDate"];
  const result2 = tasks.reduce((acc, item) => {
    keyArr.map((i) => acc[i].push(item[i]));
    return acc;
  }, list);
  console.log("result2", result2);

  return (
    <div className="border-2 border-sky-200 mt-10 m-2 p-4">
      {makeDiv("번호", todo.tno)}
      {makeDiv("작성자", todo.writer)}
      {makeDiv("제목", todo.title)}
      {makeDiv("완료여부", todo.complete ? "완료" : "미완료")}
      {tasks.map((i, idx) => (
        <div key={idx}>{i.title}</div>
      ))}
    </div>
  );
};

export default ReadComponent;
