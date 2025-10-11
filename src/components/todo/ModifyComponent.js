import React, { useEffect, useState } from "react";
import { deleteOne, getOne, putOne } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";
import ResultModal from "../common/ResultModal";

const initState = {
  tno: 0,
  title: "",
  writer: "",
  dueDate: "", // date input은 문자열 "yyyy-MM-dd"
  complete: false,
};

function formatDateToInput(val) {
  if (!val) return "";
  // val이 "2025-10-10T00:00:00" / "2025-10-10" / Date 등 다양한 형태일 수 있음
  const d = typeof val === "string" ? new Date(val) : val;
  if (Number.isNaN(d.getTime())) return "";
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const da = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${da}`;
}

const ModifyComponent = ({ tno }) => {
  const [todo, setTodo] = useState({ ...initState });
  //모달 창을 위한 상태
  const [result, setResult] = useState(null);
  const { moveToList, moveToRead } = useCustomMove();
  //모달 창이 close 될때
  const closeModal = () => {
    if (result === "삭제되었어요") moveToList();
    else moveToRead(tno);
  };
  useEffect(() => {
    if (!tno) return;
    getOne(tno).then((data) => {
      setTodo({
        tno: data.tno ?? 0,
        title: data.title ?? "",
        writer: data.writer ?? "",
        dueDate: formatDateToInput(data.dueDate),
        complete: !!data.complete,
      });
    });
    // ?.
  }, [tno]);
  const handleClickModify = () => {
    putOne(todo).then((data) => {
      console.log("수정데이터:", data);
      setResult("수정되었어요");
    });
  };
  const handleClickDelete = () => {
    deleteOne(tno).then((data) => {
      console.log("삭제데이터:", data);
      setResult("삭제되었어요");
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    todo[name] = value;
    setTodo({ ...todo });
    // setTodo((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeComplete = (e) => {
    // setTodo((prev) => ({ ...prev, complete: e.target.checked }));
    const value = e.target.value;
    console.log("check 버튼이 눌렸어요", value);
    todo.complete = value === "Y";
    setTodo({ ...todo });
  };

  return (
    <div className="border-2 border-sky-200 mt-10 m-2 p-6 rounded-xl">
      {result ? (
        <ResultModal
          title={"처리결과"}
          content={result}
          callbackFn={closeModal}
        />
      ) : (
        <></>
      )}
      <div className="flex items-center mb-4">
        <label className="w-32 text-right pr-4 font-bold">작성자</label>
        <div className="flex-1 p-3 rounded border bg-gray-100">
          {todo.writer}
        </div>
      </div>

      {/* 제목 */}
      <div className="flex items-center mb-4">
        <label htmlFor="title" className="w-32 text-right pr-4 font-bold">
          제목
        </label>
        <input
          id="title"
          name="title"
          type="text"
          className="flex-1 p-3 rounded border shadow-sm"
          value={todo.title}
          onChange={handleChange}
          placeholder="제목을 입력하세요"
        />
      </div>

      {/* 만기일 */}
      <div className="flex items-center mb-4">
        <label htmlFor="dueDate" className="w-32 text-right pr-4 font-bold">
          만기일
        </label>
        <input
          id="dueDate"
          name="dueDate"
          type="date"
          className="flex-1 p-3 rounded border shadow-sm"
          value={todo.dueDate}
          onChange={handleChange}
        />
      </div>

      {/* 완료 여부 */}
      <div className="flex items-center mb-6">
        <label className="w-32 text-right pr-4 font-bold">완료</label>
        <select
          name="status"
          className="border-solid border-2 rounded m-1 p-2"
          onChange={handleChangeComplete}
          value={todo.complete ? "Y" : "N"}
        >
          <option value="Y">완료</option>
          <option value="N">미완료</option>
        </select>
      </div>

      {/* 액션 버튼 */}
      <div className="flex justify-end gap-3">
        <button
          type="button"
          className="rounded px-5 py-3 text-white bg-blue-500 hover:bg-blue-600"
          onClick={handleClickModify}
        >
          수정
        </button>
        <button
          type="button"
          className="rounded px-5 py-3 text-white bg-red-500 hover:bg-red-600"
          onClick={handleClickDelete}
        >
          삭제
        </button>
      </div>
    </div>
  );
};

export default ModifyComponent;
