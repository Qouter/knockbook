import SideBar from "../components/SideBar";

export default function Market() {
  return (
    <h2 className="flex items-center justify-center h-screen text-2xl">
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
