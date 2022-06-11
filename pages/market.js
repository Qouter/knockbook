import styles from "../styles/Market.module.css";
import Link from "next/link";
import SideBar from "../components/SideBar";

export default function Market() {
  return (
    <h2 className="flex justify-center items-center h-screen text-2xl">
      Market
    </h2>
  );
}

Market.getLayout = function getLayout(page) {
  return (
    <>
      <SideBar />
      {page}
    </>
  );
};
