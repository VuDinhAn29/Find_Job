import CompanyCard from "@/components/common/CompanyCard";
import CompanyItem from "@/components/common/CompanyItem";

import { FC } from "react";

export interface ICompaniesPageProps {}

const CompaniesPage: FC<ICompaniesPageProps> = () => {
  const jobsData = [
    {
      id: 1,
      companyLogo: "https://2momart.vn/upload/medium/042020/sendo-app-01.png",
      jobTitle: "Frontend Developer",
      companyName: "CÔNG TY TNHH ABC Company",
      salary: "60 triệu - 80 triệu",
      city: "Hà Nội",
      place: "69 Hoàng Văn Thái, phường Tân Phú, quận 7, TPHCM",
    },
    {
      id: 2,
      companyLogo: "https://2momart.vn/upload/medium/042020/sendo-app-01.png",
      jobTitle: "Backend Developer",
      companyName: "CÔNG TY TNHH XYZ Tech",
      salary: "70 triệu - 90 triệu",
      city: "Hồ Chí Minh",
      place: "69 Hoàng Văn Thái, phường Tân Phú, quận 7, TPHCM",
    },
    {
      id: 3,
      companyLogo: "https://2momart.vn/upload/medium/042020/sendo-app-01.png",
      jobTitle: "UI/UX Designer",
      companyName: "CÔNG TY TNHH DesignHub",
      salary: "50 triệu - 70 triệu",
      city: "Đà Nẵng",
      place: "69 Hoàng Văn Thái, phường Tân Phú, quận 7, TPHCM",
    },
    {
      id: 4,
      companyLogo: "https://2momart.vn/upload/medium/042020/sendo-app-01.png",
      jobTitle: "Data Scientist",
      companyName: "CÔNG TY TNHH DataCo",
      salary: "80 triệu - 10 triệu",
      city: "Hà Nội",
      place: "69 Hoàng Văn Thái, phường Tân Phú, quận 7, TPHCM",
    },
    {
      id: 5,
      companyLogo: "https://2momart.vn/upload/medium/042020/sendo-app-01.png",
      jobTitle: "Marketing Manager",
      companyName: "CÔNG TY TNHH Marketeers",
      salary: "60 triệu - 80 triệu",
      city: "Hồ Chí Minh",
      place: "69 Hoàng Văn Thái, phường Tân Phú, quận 7, TPHCM",
    },
    {
      id: 6,
      companyLogo: "https://2momart.vn/upload/medium/042020/sendo-app-01.png",
      jobTitle: "Full Stack Developer",
      companyName: "CÔNG TY TNHH TechNinja",
      salary: "90 triệu - 11 triệu",
      city: "Đà Nẵng",
      place: "69 Hoàng Văn Thái, phường Tân Phú, quận 7, TPHCM",
    },
    {
      id: 7,
      companyLogo: "https://2momart.vn/upload/medium/042020/sendo-app-01.png",
      jobTitle: "Product Manager",
      companyName: "CÔNG TY TNHH Productify",
      salary: "10 triệu - 12 triệu",
      city: "Hà Nội",
      place: "69 Hoàng Văn Thái, phường Tân Phú, quận 7, TPHCM",
    },
    {
      id: 8,
      companyLogo: "https://2momart.vn/upload/medium/042020/sendo-app-01.png",
      jobTitle: "Content Writer",
      companyName: "CÔNG TY TNHH WordSmith",
      salary: "40 triệu - 60 triệu",
      city: "Hồ Chí Minh",
      place: "69 Hoàng Văn Thái, phường Tân Phú, quận 7, TPHCM",
    },
    {
      id: 9,
      companyLogo: "https://2momart.vn/upload/medium/042020/sendo-app-01.png",
      jobTitle: "QA Engineer",
      companyName: "CÔNG TY TNHH QualityTech",
      salary: "70 triệu - 90 triệu",
      city: "Đà Nẵng",
      place: "69 Hoàng Văn Thái, phường Tân Phú, quận 7, TPHCM",
    },
    {
      id: 10,
      companyLogo: "https://2momart.vn/upload/medium/042020/sendo-app-01.png",
      jobTitle: "HR Specialist",
      companyName: "CÔNG TY TNHH HRConnect",
      salary: "50 triệu - 70 triệu",
      city: "Hà Nội",
      place: "69 Hoàng Văn Thái, phường Tân Phú, quận 7, TPHCM",
    },
  ];
  const companiesData = [
    {
      id: 1,
      companyLogo: "https://2momart.vn/upload/medium/042020/sendo-app-01.png",
      jobTitle: "Frontend Developer",
      companyName: "CÔNG TY TNHH ABC Company",
      companyBanner:
        "https://timviec.com.vn/cong-ty-co-phan-tap-doan-nha-pho-viet-nam-tuyen-dung-22400",
      city: "Hà Nội",
      place: "106 Chùa Láng, Quận Đống Đa, Hà Nội",
    },
    {
      id: 2,
      companyLogo: "https://2momart.vn/upload/medium/042020/sendo-app-01.png",
      jobTitle: "Backend Developer",
      companyName: "CÔNG TY TNHH XYZ Tech",
      companyBanner:
        "https://timviec.com.vn/storage/companies/10592/thumb-80x80-52V3qTpvbx2zTkIWDKVn9VJkY6lnh1jDsR7tLnoy.png",
      city: "Hồ Chí Minh",
      place: "909 Ngô Quyền",
    },
    {
      id: 3,
      companyLogo: "https://2momart.vn/upload/medium/042020/sendo-app-01.png",
      jobTitle: "UI/UX Designer",
      companyName: "CÔNG TY TNHH DesignHub",
      companyBanner: "https://timviec.com.vn/images/company/banners/img-8.jpg",
      city: "Đà Nẵng",
      place: "Tầng 5 tòa nhà Hà Thành 102 thái thịnh",
    },
  ];
  return (
    <div className="container ">
      <div className="tv-content mx-16 my-10">
        <div className="tv-search-bg">
          <form className="w-full overflow-x-hidden">
            <div className="flex items-center flex-row space-x-8 ">
              <input
                className="appearance-none basis-5/6  bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
                id="grid-first-name"
                type="text"
                placeholder="Nhập tên công ty muốn tìm"
              />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 mb-3 rounded ">
                Tìm kiếm
              </button>
            </div>
          </form>
          <div className="breadcrumb">
            <div className="search-breadcrumb flex flex-row">
              <p>
                Trang chủ / <span>Công ty</span>{" "}
              </p>
            </div>
          </div>
          <div className="container mx-auto mt-4">
            <div className="p-3 text-white flex items-center justify-between bg-[var(--primary-color)] mb-2">
              <h3 className="text-xl">Các công ty hàng đầu</h3>
              <a href="#" className="hover:underline text-white text-sm">
                Xem thêm
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {companiesData.map((cp) => (
                <CompanyCard key={cp.id} data={cp} />
              ))}
            </div>
          </div>
          <div className="container mx-auto">
            <div className="p-3 text-white flex items-center justify-between bg-[var(--primary-color)]">
              <h3 className="text-xl">Các công ty khác</h3>
              <a href="#" className="hover:underline text-white text-sm">
                Xem thêm
              </a>
            </div>

            <div className="p-2 bg-white grid grid-cols-1 sm:grid-cols-2  gap-4">
              {jobsData.map((job) => (
                <CompanyItem key={job.id} data={job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesPage;
