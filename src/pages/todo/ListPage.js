import { useSearchParams } from "react-router-dom";
import ListComponent from "../../components/todo/ListComponent";

const ListPage = () => {
  const [queryParmas] = useSearchParams();
  const page = queryParmas.get("page") ? parseInt(queryParmas.get("page")) : 1;
  const size = queryParmas.get("size") ? parseInt(queryParmas.get("size")) : 10;

  return (
    <div className="p-4 w-full bg-orange-200">
      <div className="text-3xl font-extrabold">Todo List Page components</div>
      <ListComponent page={page} size={size} />
    </div>
  );
};

export default ListPage;
