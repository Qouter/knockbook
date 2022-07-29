import AppLayout from "../components/AppLayout";
import Auth from "../components/Auth";

export default function Market() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen text-2xl">
      {/* <h1>Market</h1> */}
      <Auth></Auth>
    </div>
  );
}

Market.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};
