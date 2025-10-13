import { lazy, Suspense } from "react";
const AddressAdd = lazy(() => import("../pages/address/AddPage"));

const Loading = () => <div>Loading...</div>;

const addressRouter = () => {
  return [
    {
      path: "add",
      element: (
        <Suspense fallback={<Loading />}>
          <AddressAdd />
        </Suspense>
      ),
    },
  ];
};
export default addressRouter;
