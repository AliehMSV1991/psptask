"use client";
import getUser from "@/app/services/getUser";
import { useQuery } from "@tanstack/react-query";
interface IUsers {
  name: string;
  username: string;
  email: string;
}
const List = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getUser(),
    queryKey: ["user"], //Array according to Documentation
  });

  return (
    <div className="flex gap-2 flex-col px-4">
      {data?.data.map((item: IUsers) => {
        return (
          <div className="flex flex-col border-b p-3 ">
            <span>{item.name}</span>
            <span>{item.username}</span>
            <span>{item.email}</span>
          </div>
        );
      })}
    </div>
  );
};
export default List;
