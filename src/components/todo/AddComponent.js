import React, { useState } from "react";
import { postAdd } from "../../api/todoApi";
import ResultModal from "../common/ResultModal";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
  title: "",
  writer: "",
  dueDate: "",
};
const AddComponent = () => {
  const [todo, setTodo] = useState({ ...initState });
  const [result, setResult] = useState(null);
  const { moveToList } = useCustomMove();
  const handleChangeTodo = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleClickAdd = () => {
    console.log("추가 버튼이 눌렸다", todo);
    postAdd(todo)
      .then((res) => {
        console.log("rse", res);
        setResult(res.TNO); //결과 데이터 변경
        setTodo({ ...initState });
      })
      .catch((e) => console.error(e));
  };

  const closeModal = () => {
    setResult(null);
    moveToList();
  };
  return (
    <div>
      <div className="border-2 border-sky-200 mt-10 m-2 p-4">
        {/* 모달 처리 */}
        {result ? (
          <ResultModal
            title={"결과 추가"}
            content={`새로운 ${result} 가 추가되었습니다`}
            callbackFn={closeModal}
          />
        ) : (
          <></>
        )}

        <div className="flex justify-center">
          <div className="relative mb-4 w-full flex-wrap items-stretch">
            <div className="w-1/5 text-right font-bold">제목</div>
            <input
              className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
              name="title"
              type="text"
              value={todo.title}
              onChange={handleChangeTodo}
            ></input>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative mb-4 w-full flex-wrap items-stretch">
            <div className="w-1/5 text-right font-bold">작성자</div>
            <input
              className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
              name="writer"
              type="text"
              value={todo.writer}
              onChange={handleChangeTodo}
            ></input>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative mb-4 w-full flex-wrap items-stretch">
            <div className="w-1/5 text-right font-bold">마감일</div>
            <input
              className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
              name="dueDate"
              type="text"
              value={todo.dueDate}
              onChange={handleChangeTodo}
            ></input>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="relative mb-4 flex p-4 flex-wrap items-stretch">
            <button
              type="button"
              onClick={handleClickAdd}
              className="rounded p-4 w-36 bg-blue-500 text-xl text-white"
            >
              추가
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddComponent;
