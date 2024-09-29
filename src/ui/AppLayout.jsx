import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="bg-primary-900 text-slate-200 min-h-dvh">
      <Header />
      <main className="w-3/4 mx-auto xl:w-full xl:px-4">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
