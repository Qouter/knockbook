import SideBar from "./SideBar";

export default function AppLayout({ children }) {
  return (
    <main className="flex flex-row">
      <SideBar />
      {children}
    </main>
  );
}
