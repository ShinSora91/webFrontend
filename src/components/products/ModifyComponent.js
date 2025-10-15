import { useEffect, useRef, useState } from "react";
import { deleteProduct, getOne, putProduct } from "../../api/productApi";
import FetchingModal from "../common/FetchingModal";
import useCustomMove from "../../hooks/useCustomMove";
import ResultModal from "../common/ResultModal";
import { API_SERVER_HOST } from "../../api/todoApi";

const initState = { pname: "", pdesc: "", price: 0, files: [] };

const ModifyComponent = ({ pno }) => {
  const [product, setProduct] = useState({ ...initState });
  const [fetching, setFetching] = useState(false);
  const [result, setResult] = useState(null);
  const uploadRef = useRef();
  const { moveToList, moveToRead } = useCustomMove();
  const host = API_SERVER_HOST;

  useEffect(() => {
    setFetching(true);
    getOne(pno).then((data) => {
      setProduct(data);
      setFetching(false);
    });
  }, [pno]);
  const closeModal = () => {
    if (result === "수정완료") moveToRead(pno);
    else if (result === "삭제완료") moveToList({ page: 1 });
    setResult(null);
  };
  const handleChangeProduct = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  //기존 이미지 삭제
  const deleteOldImages = (imageName) => {
    const resultFileNames = product.uploadFileNames.filter(
      (fileName) => fileName != imageName
    );
    product.uploadFileNames = resultFileNames;
    setProduct({ ...product });
  };

  const handleClickModify = () => {
    const files = uploadRef.current.files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    formData.append("pname", product.pname);
    formData.append("pdesc", product.pdesc);
    formData.append("price", product.price);
    formData.append("delFlag", product.delFlag);
    for (let i = 0; i < product.uploadFileNames.length; i++) {
      formData.append("uploadFileNames", product.uploadFileNames[i]);
    }
    setFetching(true);
    putProduct(pno, formData).then((data) => {
      setResult("수정완료");
      setFetching(false);
    });
  };

  const handleClickDelete = () => {
    setFetching(true);
    deleteProduct(pno).then((data) => {
      setResult("삭제완료");
      setFetching(false);
    });
  };

  return (
    <div className="border-2 border-sky-200 mt-10 m-2 p-4">
      {fetching ? <FetchingModal /> : <></>}
      {result ? (
        <ResultModal
          title={`${result}`}
          content={"정상적으로 처리되었습니다"}
          callbackFn={closeModal}
        />
      ) : (
        <></>
      )}
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">제품명</div>
          <input
            className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
            type="text"
            name="pname"
            value={product.pname}
            onChange={handleChangeProduct}
          ></input>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">상품설명</div>
          <textarea
            className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md resize-y"
            name="pdesc"
            rows="4"
            onChange={handleChangeProduct}
            value={product.pdesc}
          >
            {product.pdesc}
          </textarea>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">가격</div>
          <input
            className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
            name="price"
            type="number"
            value={product.price}
            onChange={handleChangeProduct}
          ></input>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">삭제</div>
          <select
            name="delFlag"
            value={product.delFlag}
            onChange={handleChangeProduct}
            className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
          >
            <option value={false}>사용</option>
            <option value={true}>삭제</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">파일</div>
          <input
            ref={uploadRef}
            className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
            type={"file"}
            multiple={true}
          ></input>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">이미지들</div>
          <div className="w-4/5 justify-center flex flex-wrap items-start">
            {product.uploadFileNames &&
              product.uploadFileNames.map((imgFile, i) => (
                <div
                  className="flex justify-center flex-col w-1/3 m-1 align-baseline"
                  key={i}
                >
                  <button
                    className="bg-blue-500 text-3xl text-white"
                    onClick={() => deleteOldImages(imgFile)}
                  >
                    삭제
                  </button>
                  <img
                    alt="img"
                    src={`${host}/api/products/view/s_${imgFile}`}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="rounded p-4 m-2 text-xl w-32 text-white bg-red-500"
          onClick={handleClickDelete}
        >
          삭제
        </button>
        <button
          type="button"
          onClick={handleClickModify}
          className="inline-block rounded p-4 m-2 text-xl w-32 text-white bg-orange-500"
        >
          수정
        </button>
        <button
          type="button"
          className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
          onClick={moveToList}
        >
          목록
        </button>
      </div>
    </div>
  );
};

export default ModifyComponent;
