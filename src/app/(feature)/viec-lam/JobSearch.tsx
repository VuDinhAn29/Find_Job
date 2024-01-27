"use client";
import { FC } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import "swiper/css";

export interface IJobSearchProps {}
const JobSearch: FC<IJobSearchProps> = () => {
  return (
    <div className="container">
      <form className="w-full ">
        <div className="flex flex-nowrap  mb-2">
          <div className="w-full md:w-3/8 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="Tiêu đề công việc..."
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>Tất cả ngành nghề</option>
                <option>Báo chí</option>
                <option>CNTT</option>
                <option>Kinh doanh</option>
                <option>Kiến trúc</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option selected>Tất cả địa điểm</option>
                <option>Hà Nội</option>
                <option>HCM</option>
                <option>Nam Định</option>
                <option>Yên Bái</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded">
              Tìm kiếm
            </button>
          </div>
        </div>
        <div className="tk-nangcao mt-5">
          <div className="search-result-total">
            <div className="search-tag w-full flex flex-row space-x-8">
              <div className="font-bold">Tìm kiếm phổ biến</div>
              <div className="key-work flex flex-row space-x-8">
                <a
                  target="_blank"
                  href="https://timviec.com.vn/ban-hang"
                  className=" active text-blue-400 "
                >
                  Frontend Developer
                </a>
                <a
                  target="_blank"
                  href="https://timviec.com.vn/viec-lam-tai-ha-noi-1581130"
                  className="hover:text-blue-400"
                >
                  Việc làm Hà Nội
                </a>
                <a
                  target="_blank"
                  href="https://timviec.com.vn/viec-lam-tai-ho-chi-minh-1566083"
                  className="hover:text-blue-400"
                >
                  Việc làm Hồ Chí Minh
                </a>
                <a
                  target="_blank"
                  href="https://timviec.com.vn/bat-dong-san"
                  className="hover:text-blue-400"
                >
                  UI/UX Designer
                </a>
                <a
                  target="_blank"
                  href="https://timviec.com.vn/viec-lam-tai-da-nang-1583992"
                  className="hover:text-blue-400"
                >
                  Việc làm Đà Nẵng
                </a>
              </div>
            </div>
            <div className="panel-title flex flex-row-reverse items-center">
              <AiOutlineCaretDown className="ml-2" />
              <p> Tìm kiếm nâng cao</p>
            </div>
            <div className="tk-select flex flex-row space-x-8 mt-3">
              <div className="basis-1/5 relative ml-3.5">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option selected>Cấp bậc</option>
                  <option>Nhân viên</option>
                  <option>Trưởng nhóm</option>
                  <option>Trưởng phòng</option>
                  <option>Giám đốc</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <div className="basis-1/5 relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option selected>Mức lương</option>
                  <option>1-5 triệu</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <div className="basis-1/5 relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option selected>Kinh nghiêm</option>
                  <option>1 năm</option>
                  <option>2 năm</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <div className="basis-1/5 relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option selected>Loại hình công việc</option>
                  <option>Dài hạn</option>
                  <option>Hợp đồng</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <div className="basis-1/5 relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option selected>Giới tính</option>
                  <option>Nam</option>
                  <option>Nữ</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobSearch;
