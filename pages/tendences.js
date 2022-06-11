import styles from "../styles/Market.module.css";
import Link from "next/link";
import SideBar from "../components/SideBar";

export default function Tendences() {
  return (
    <h2 className="flex justify-center items-center h-screen text-2xl">
      Tendences
    </h2>
  );
}

Tendences.getLayout = function getLayout(page) {
  return (
    <>
      <SideBar />
      {page}
    </>
  );
};
