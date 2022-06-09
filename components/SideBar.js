import { FaBeer } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";
import { HiTrendingUp } from "react-icons/hi";
import { BiSearchAlt } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-20 m-0 bg-primary flex flex-col text-secondary drop-shadow-lg">
      <SideBarIcon icon={<BsFillHouseFill size="28" />} />
      <SideBarIcon icon={<HiTrendingUp size="28" />} />
      <SideBarIcon icon={<BiSearchAlt size="28" />} />
      <SideBarIcon icon={<FaRegUserCircle size="28" />} />
    </div>
  );
};

const SideBarIcon = ({ icon }) => {
  return <div className="sidebar-icon">{icon}</div>;
};

export default SideBar;
