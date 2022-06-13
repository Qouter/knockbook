import AppLayout from "../components/AppLayout";

export default function Search() {
  return (
    <h2 className="flex items-center justify-center h-screen w-screen text-2xl">
      Search
    </h2>
  );
}

Search.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};
