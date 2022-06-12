import Link from "next/link";
import SideBar from "../components/SideBar";

export default function Tendences() {
  return (
    <h2 className="flex items-center justify-center h-screen text-2xl">
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
