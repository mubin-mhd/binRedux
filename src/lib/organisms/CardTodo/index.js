import React from "react";
import Text from "../../atoms/Text";
import { HiCalendar, HiDotsVertical, HiTrash, HiStar } from "react-icons/hi";
import Chips from "../../atoms/chips";
import formatDate from "../../../helper/formatDate";
import { LoadingSmall } from "../../../component/LoadingSmall";

const CardTodo = ({
  data,
  onDelete,
  onChangeimportant,
  onChangeComplete,
  isLoad,
  bgCard,
  handleOpenEdit,
}) => {
  const { id, title, dir, completed, description, created_at, important } =
    data;

  return (
    <div
      className={`w-[280px] h-[300px] ${bgCard} p-5 bgCardrounded-md relative`}
    >
      <div className="min-w-10 h-6 bg-orange-400 px-2  absolute right-2 -top-6 rounded-t-lg text-white">
        {dir}
      </div>
      <div className="h-48">
        <Text
          label={title}
          size="medium"
          color="text-white"
          addClass={`font-inter mb-5`}
        />
        <Text
          label={description}
          color="text-gray-50"
          addClass={`font-inter`}
        />
      </div>

      <div className="flex items-center">
        <HiCalendar className="text-white text-lg " />
        <Text
          size="medium"
          label={formatDate(created_at)}
          color="text-white"
          addClass="ml-2 font-[600]"
        />
      </div>
      <div className="border "></div>
      <div className="flex justify-between">
        {completed === "complete" ? (
          <button onClick={() => onChangeComplete(completed, id)}>
            <Chips label="completed" addClass={`mt-4`} />
          </button>
        ) : (
          <button onClick={() => onChangeComplete(completed, id)}>
            <Chips
              label="uncompleted"
              bgColor="bg-orange-500"
              color="text-white"
              addClass={`mt-4`}
            />
          </button>
        )}

        <div className="flex items-center gap-2 mt-4">
          <button onClick={() => onChangeimportant(important, id)}>
            {/* {isLoad ? (
              <div className="w-6 h-6">
                <LoadingSmall />
              </div>
            ) : ( */}
            <HiStar
              className={`text-2xl ${
                important ? `text-orange-500` : `text-white`
              }`}
            />
            {/* )} */}
          </button>
          <button onClick={() => onDelete(id)}>
            <HiTrash className="text-2xl text-gray-50" />
          </button>
          <button onClick={() => handleOpenEdit(id)}>
            <HiDotsVertical className="text-2xl text-gray-50" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardTodo;
