import { Outlet } from "react-router-dom";
import AccountSidebar from "../ui/AccountSidebar";

function Account() {
  return (
    <div className="grid grid-cols-[300px_3fr] lg:block">
      <aside className="flex mt-40 flex-col h-fit lg:mt-10">
        <AccountSidebar />
      </aside>
      <article className="mt-24 w-full mx-auto px-8 lg:mt-10">
        {<Outlet />}
      </article>
    </div>
  );
}

export default Account;
