import Link from "next/link";
import SideBar from "../components/SideBar";

export default function Search() {
  return (
    <h2 className="flex justify-center items-center h-screen text-2xl">
      Search
    </h2>
  );
}

Search.getLayout = function getLayout(page) {
  return (
    <>
      <SideBar />
      {page}
    </>
  );
};
