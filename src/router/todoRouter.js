import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
const TodoList = lazy(() => import("../pages/todo/ListPage"));
const TodoRead = lazy(() => import("../pages/todo/ReadPage"));
const TodoAdd = lazy(() => import("../pages/todo/AddPage"));
const TodoModify = lazy(() => import("../pages/todo/ModifyPage"));

// const ScoreList = lazy(() => import("../pages/score/SListPage"));
// const ScoreRead = lazy(() => import("../pages/score/SReadPage"));
const Loading = () => <div>Loading...</div>;

const todoRouter = () => {
  return [
    {
      path: "list",
      element: (
        <Suspense fallback={<Loading />}>
          <TodoList />
        </Suspense>
      ),
    },
    {
      path: "",
      element: <Navigate replace to="/todo/list" />,
    },
    {
      path: "read/:tno",
      element: (
        <Suspense fallback={<Loading />}>
          <TodoRead />
        </Suspense>
      ),
    },
    {
      path: "add",
      element: (
        <Suspense fallback={<Loading />}>
          <TodoAdd />
        </Suspense>
      ),
    },
    {
      path: "modify/:tno",
      element: (
        <Suspense fallback={<Loading />}>
          <TodoModify />
        </Suspense>
      ),
    },
    // {
    //   path: "slist",
    //   element: (
    //     <Suspense fallback={<Loading />}>
    //       <ScoreList />
    //     </Suspense>
    //   ),
    // },
    // {
    //   path: "sread/:sno",
    //   element: (
    //     <Suspense fallback={<Loading />}>
    //       <ScoreRead />
    //     </Suspense>
    //   ),
    // },
  ];
};
export default todoRouter;
