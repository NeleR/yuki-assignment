import { Outlet } from "react-router";

export default function PageLayout() {
  return (
    <div
      className="w-screen h-screen overflow-scroll
                 p-5 md:py-10 md:px-50 xl:py-20 xl:px-100
                 bg-linear-to-b from-sky-950 to-purple-950
                 text-white"
    >
      <Outlet />
    </div>
  );
}
