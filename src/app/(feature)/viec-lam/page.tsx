import NewJobItem from "@/components/common/NewJobItem";
import { FC } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import JobSearch from "./JobSearch";
import JobAdvanced from "./JobAdvanced";

export interface IJobsPageProps {}
const JobsPage: FC<IJobsPageProps> = () => {
  const jobsData = [
    {
      id: 1,
      companyLogo: "https://2momart.vn/upload/medium/042020/sendo-app-01.png",
      jobTitle: "Frontend Developer",
      companyName: "CÔNG TY TNHH ABC Company",
      salary: "60 triệu - 80 triệu",
      city: "Hà Nội",
      date: "10/02/2024",
    },
    {
      id: 2,
      companyLogo: "https://2momart.vn/upload/medium/042020/sendo-app-01.png",
      jobTitle: "Backend Developer",
      companyName: "CÔNG TY TNHH XYZ Tech",
      salary: "70 triệu - 90 triệu",
      city: "Yên Bái",
      date: "10/02/2024",
    },
    {
      id: 3,
      companyLogo: "https://2momart.vn/upload/medium/042020/sendo-app-01.png",
      jobTitle: "UI/UX Designer",
      companyName: "CÔNG TY TNHH DesignHub",
      salary: "50 triệu - 70 triệu",
      city: "Hà Nội",
      date: "10/02/2024",
    },
    {
      id: 4,
      companyLogo: "https://2momart.vn/upload/medium/042020/sendo-app-01.png",
      jobTitle: "Data Scientist",
      companyName: "CÔNG TY TNHH DataCo",
      salary: "80 triệu - 10 triệu",
      city: "Hà Nội",
      date: "10/02/2024",
    },
    {
      id: 5,
      companyLogo: "https://2momart.vn/upload/medium/042020/sendo-app-01.png",
      jobTitle: "Marketing Manager",
      companyName: "CÔNG TY TNHH Marketeers",
      salary: "60 triệu - 80 triệu",
      city: "Hà Nam",
      date: "10/02/2024",
    },
    {
      id: 6,
      companyLogo: "https://2momart.vn/upload/medium/042020/sendo-app-01.png",
      jobTitle: "Full Stack Developer",
      companyName: "CÔNG TY TNHH TechNinja",
      salary: "90 triệu - 11 triệu",
      city: "Yên Bái",
      date: "10/02/2024",
    },
    {
      id: 7,
      companyLogo: "https://2momart.vn/upload/medium/042020/sendo-app-01.png",
      jobTitle: "Product Manager",
      companyName: "CÔNG TY TNHH Productify",
      salary: "10 triệu - 12 triệu",
      city: "Hà Nội",
      date: "10/02/2024",
    },
    {
      id: 8,
      companyLogo: "https://2momart.vn/upload/medium/042020/sendo-app-01.png",
      jobTitle: "Content Writer",
      companyName: "CÔNG TY TNHH WordSmith",
      salary: "40 triệu - 60 triệu",
      city: "Hà Nam",
      date: "10/02/2024",
    },
    {
      id: 9,
      companyLogo: "https://2momart.vn/upload/medium/042020/sendo-app-01.png",
      jobTitle: "QA Engineer",
      companyName: "CÔNG TY TNHH QualityTech",
      salary: "70 triệu - 90 triệu",
      city: "Đà Nẵng",
      date: "10/02/2024",
    },
    {
      id: 10,
      companyLogo: "https://2momart.vn/upload/medium/042020/sendo-app-01.png",
      jobTitle: "HR Specialist",
      companyName: "CÔNG TY TNHH HRConnect",
      salary: "50 triệu - 70 triệu",
      city: "Hà Nội",
      date: "10/02/2024",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="tv-content">
        <div className="tv-search m-10">
          <JobSearch />
        </div>
        <div className="tv-fast-jobs m-10">
          <div className="container">
            <div className="breadcrumb">
              <div className="search-breadcrumb flex flex-row mb-10">
                <p>
                  Trang chủ / <span>Việc làm</span>{" "}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-3 ">
                <div className="p-3 text-white flex items-center justify-between bg-[var(--primary-color)]">
                  <h3 className="text-xl">VIỆC LÀM MỚI</h3>
                </div>

                <div className="p-2 bg-white grid grid-cols-1 gap-4">
                  {jobsData.map((job) => (
                    <NewJobItem key={job.id} data={job} />
                  ))}
                </div>
              </div>
              <div>
                <div className="grid grid-rows-2 grid-flow-col   ">
                  <div className="col-span-1 tv-tittle  ">
                    <div className="p-3 text-white flex items-center justify-between bg-[var(--primary-color)]">
                      <h3 className="text-xl">Tìm kiếm theo ngành</h3>
                    </div>
                    <div className="mb-10 ">
                      <div className="bg-white p-6 rounded shadow-md">
                        <div className="flex justify-center">
                          <input
                            className="border border-black w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white  hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50"
                            id="username"
                            type="text"
                            placeholder="Tìm ngành nghề"
                          />
                        </div>
                        <div className="flex flex-col ">
                          {jobsData.map((job) => (
                            <a className="pt-5 hover:text-blue-400 cursor-pointer ">
                              {job.jobTitle}{" "}
                              <span className="text-red-500">(10)</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 tv-search-advanced">
                    <div className="p-3 text-white flex items-center justify-between bg-[var(--primary-color)]">
                      <h3 className="text-xl">Tìm kiếm nâng cao</h3>
                    </div>
                    <JobAdvanced />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
