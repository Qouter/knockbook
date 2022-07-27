import Image from "next/image";
import AppLayout from "../components/AppLayout";

export default function Profile() {
  return (
    <h1 className="flex items-center justify-center w-screen h-screen text-2xl">
      Profile
    </h1>
  );
}

Profile.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};
