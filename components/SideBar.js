import Link from 'next/link'
import { BsFillHouseFill } from 'react-icons/bs'
import { BsPlusSquare } from 'react-icons/bs'
import { FaRegUserCircle } from 'react-icons/fa'
import { HiTrendingUp } from 'react-icons/hi'

const SideBar = () => {
  return (
    <div className="sticky top-0 left-0 flex flex-col w-20 h-screen m-0 bg-primary text-secondary drop-shadow-lg">
      <SideBarIcon icon={<BsFillHouseFill size="28" />} linkPath="/" />
      <SideBarIcon icon={<HiTrendingUp size="28" />} linkPath="/dashboard" />
      <SideBarIcon icon={<BsPlusSquare size="28" />} linkPath="/create" />
      <SideBarIcon icon={<FaRegUserCircle size="28" />} linkPath="/profile" />
    </div>
  )
}

const SideBarIcon = ({ icon, linkPath = '/' }) => {
  return (
    <Link href={linkPath}>
      <div className="sidebar-icon" id={linkPath}>
        {icon}
      </div>
    </Link>
  )
}

export default SideBar
