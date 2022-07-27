import AppLayout from "../components/AppLayout";

export default function Market() {
  return (
    <h1 className="flex items-center justify-center w-screen h-screen text-2xl">
      Market
    </h1>
  );
}

Market.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};
