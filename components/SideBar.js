import { BsFillHouseFill } from "react-icons/bs";
import { HiTrendingUp } from "react-icons/hi";
import { BiSearchAlt } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { BsPlusSquare } from "react-icons/bs";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="sticky top-0 left-0 flex flex-col w-20 h-screen m-0 bg-primary text-secondary drop-shadow-lg">
      <SideBarIcon icon={<BsFillHouseFill size="28" />} linkPath="/" />
      <SideBarIcon icon={<HiTrendingUp size="28" />} linkPath="/market" />
      <SideBarIcon icon={<BsPlusSquare size="28" />} linkPath="/create" />
      <SideBarIcon icon={<FaRegUserCircle size="28" />} linkPath="/profile" />
    </div>
  );
};

const SideBarIcon = ({ icon, linkPath = "/" }) => {
  return (
    <Link href={linkPath}>
      <div className="sidebar-icon">{icon}</div>
    </Link>
  );
};

export default SideBar;
