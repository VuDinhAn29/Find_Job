import { FC } from "react";
import { FaLocationDot } from "react-icons/fa6";

export interface ICompanyItemProps {
  data: {
    id: number;
    companyLogo: string;
    jobTitle: string;
    companyName: string;
    salary: string;
    city: string;
    place: string;
  };
}
const CompanyItem: FC<ICompanyItemProps> = ({ data }) => {
  return (
    <div
      key={data.id}
      className="bg-white p-3 rounded border flex items-center space-x-4"
    >
      <img
        src={data.companyLogo}
        alt={data.companyName}
        className="w-16 h-16 rounded object-cover"
      />
      <div>
        <h5 className="text-sm font-semibold"> {data.companyName}</h5>
        <div className="flex items-center text-gray-600 ">
          <FaLocationDot color="var(--primary-color)" />
          <p className="text-gray-600 mb-1  text-xs mt-1 opacity-70 ml-2">
            Địa chỉ: {data.place}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyItem;
