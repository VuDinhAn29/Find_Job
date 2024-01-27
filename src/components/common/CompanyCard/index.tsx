import { FC } from "react";
import { FaLocationDot } from "react-icons/fa6";
import "./style.css";

export interface ICompanyCardProps {
  data: {
    id: number;
    companyLogo: string;
    jobTitle: string;
    companyBanner: string;
    companyName: string;
    city: string;
    place: string;
  };
}
const CompanyCard: FC<ICompanyCardProps> = ({ data }) => {
  return (
    <div className="item-top-company">
      <div className="company-baner">
        <a
          target="_blank"
          rel="nofollow"
          href={data.companyBanner}
          tabIndex={0}
        >
          <img
            src="https://timviec.com.vn/images/company/banners/img-3.jpg"
            alt="Công Ty Cổ Phần Tập Đoàn Nhà Phố Việt Nam"
            className="w-full h-full object-cover rounde"
          />
        </a>
      </div>
      <div className="company-info d-flex flex-row space-x-8">
        <a
          target="_blank"
          href="https://timviec.com.vn/cong-ty-co-phan-tap-doan-nha-pho-viet-nam-tuyen-dung-22400"
          rel="nofollow"
          tabIndex={0}
          className="mr-20"
        >
          <img
            className="company-logo ls-is-cached lazy_is_loaded "
            data-src="https://timviec.com.vn/storage/companies/22400/thumb-80x80-zBaH81nVoxmhdDnqrvNDCYe0IDidi29UQEzyYNeB.png"
            alt="Công Ty Cổ Phần Tập Đoàn Nhà Phố Việt Nam"
            src={data.companyLogo}
          />
        </a>
        <h3 className="company-name" title={data.companyName}>
          <a
            className="show_html_xac_minh da_show_html_xac_minh"
            data-company_id={22400}
            href="https://timviec.com.vn/cong-ty-co-phan-tap-doan-nha-pho-viet-nam-tuyen-dung-22400"
            tabIndex={0}
          >
            <span className="mr-5">
              Công Ty Cổ Phần Tập Đoàn Nhà Phố Việt Nam
            </span>
          </a>
        </h3>
      </div>
      <div className="flex items-center text-left px-2  ">
        <FaLocationDot color="black" />
        <i className="fas fa-map-marker-alt ml-1" /> Địa chỉ: {data.place}
      </div>
    </div>
  );
};

export default CompanyCard;
