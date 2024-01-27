"use client";
import { FC } from "react";
import "swiper/css";

export interface IJobAdvancedProps {}
const JobAdvanced: FC<IJobAdvancedProps> = () => {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <div className="mb-4">
        <label
          htmlFor="industry"
          className="block text-sm font-medium text-gray-600 mb-2"
        >
          Ngành nghề
        </label>
        <div className="relative">
          <select
            id="industry"
            name="industry"
            className="appearance-none w-full border rounded-md py-2 pl-3 pr-10 leading-5 bg-white border-gray-300 focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          >
            {/* Options for industry */}
            <option value="it">Công nghệ thông tin</option>
            <option value="finance">Tài chính</option>
            {/* ... */}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Repeat the structure for other filters (level, experience, salary, job type, city) */}

      <div className="mb-4">
        <label
          htmlFor="city"
          className="block text-sm font-medium text-gray-600 mb-2"
        >
          Thành phố
        </label>
        <div className="relative">
          <select
            id="city"
            name="city"
            className="appearance-none w-full border rounded-md py-2 pl-3 pr-10 leading-5 bg-white border-gray-300 focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          >
            {/* Options for city */}
            <option value="hanoi">Hà Nội</option>
            <option value="hochiminh">Hồ Chí Minh</option>
            {/* ... */}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="city"
          className="block text-sm font-medium text-gray-600 mb-2"
        >
          Năm kinh nghiệm
        </label>
        <div className="relative">
          <select
            id="city"
            name="city"
            className="appearance-none w-full border rounded-md py-2 pl-3 pr-10 leading-5 bg-white border-gray-300 focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          >
            {/* Options for city */}
            <option value="hanoi">1 Năm</option>
            {/* ... */}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="city"
          className="block text-sm font-medium text-gray-600 mb-2"
        >
          Mức lương
        </label>
        <div className="relative">
          <select
            id="city"
            name="city"
            className="appearance-none w-full border rounded-md py-2 pl-3 pr-10 leading-5 bg-white border-gray-300 focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          >
            {/* Options for city */}
            <option value="hanoi">30 triệu - 50 triệu</option>
            {/* ... */}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="city"
          className="block text-sm font-medium text-gray-600 mb-2"
        >
          Loại hình công việc
        </label>
        <div className="relative">
          <select
            id="city"
            name="city"
            className="appearance-none w-full border rounded-md py-2 pl-3 pr-10 leading-5 bg-white border-gray-300 focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          >
            {/* Options for city */}
            <option value="hochiminh">Full-time</option>
            {/* ... */}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Add more filters as needed */}

      <div className="flex justify-center">
        <button
          type="submit"
          className="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[var(--primary-color)] hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50"
        >
          Tìm kiếm
        </button>
      </div>
    </div>
  );
};

export default JobAdvanced;
