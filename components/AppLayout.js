import SideBar from "./SideBar";
export default function AppLayout({ children }) {
  return (
    <>
      <SideBar />
      <div className="flex ">{children}</div>
    </>
  );
}
