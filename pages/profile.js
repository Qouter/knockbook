import styles from "../styles/Market.module.css";
import Link from "next/link";
import SideBar from "../components/SideBar";

export default function Profile() {
  return (
    <h2 className="flex justify-center items-center h-screen text-2xl">
      Profile
    </h2>
  );
}

Profile.getLayout = function getLayout(page) {
  return (
    <>
      <SideBar />
      {page}
    </>
  );
};
