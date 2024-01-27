import { FC } from "react";
import {
  AiFillHeart,
  AiOutlineClockCircle,
  AiOutlineDollar,
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

export interface IJobItemProps {
  data: {
    id: number;
    companyLogo: string;
    jobTitle: string;
    companyName: string;
    salary: string;
    city: string;
    date: string;
  };
}
const NewJobItem: FC<IJobItemProps> = ({ data }) => {
  return (
    <div className="flex items-center rounded border  ">
      <div
        key={data.id}
        className="bg-white p-3  flex items-center space-x-8 mr-2"
      >
        <img
          src={data.companyLogo}
          alt={data.companyName}
          className="w-16 h-16 rounded object-cover"
        />
        <div>
          <h5 className="text-sm font-semibold">{data.jobTitle}</h5>
          <p className="text-gray-600 mb-1 uppercase text-xs mt-1 opacity-70">
            {data.companyName}
          </p>
          <div className="flex ">
            <div className="flex items-center text-gray-600">
              <AiOutlineDollar color="var(--primary-color)" />
              <p className="text-[13px] ml-1">Lương: {data.salary}</p>
            </div>
            <div className="flex items-center text-gray-600 ml-28">
              <CiLocationOn color="var(--primary-color)" />
              <p className="text-[13px] ml-1">Khu vực: {data.city}</p>
            </div>
            <div className="flex items-center text-gray-600 ml-28">
              <AiOutlineClockCircle color="var(--primary-color)" />
              <p className="text-[13px] ml-1">Hạn nộp: {data.date}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center text-gray-600 ml-36 cursor-pointer">
        <AiFillHeart color="var(--primary-color)" />
      </div>
    </div>
  );
};

export default NewJobItem;
