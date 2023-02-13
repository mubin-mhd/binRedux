import React from "react";
import Text from "../../atoms/Text";
import { HiDotsVertical, HiOutlineTrendingUp } from "react-icons/hi";

const MiniCard = ({ data }) => {
  const { title, value, persentase, from } = data;
  return (
    <div className="w-[230.94px] h-[126.03px] p-[20px] dark:bg-gray2 bg-white rounded-md">
      <div className="flex justify-between items-center">
        <Text label={title} />
        <HiDotsVertical className="text-gray-700" />
      </div>
      <Text label={value} addClass="text-[32px] font-[600]" />
      <div className="flex items-center mt-[11px]">
        <HiOutlineTrendingUp className="text-[#4EAF51] text-sm" />
        <Text label={persentase} color="text-[#4EAF51]" addClass="ml-2" />
        <Text label={`From ${from}`} addClass="ml-2" />
      </div>
    </div>
  );
};

export default MiniCard;
