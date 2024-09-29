import { NavLink, useLocation } from "react-router-dom";

function SidebarNavLink({ children, to, type = "link", onClick }) {
  const location = useLocation();
  const pathname = location.pathname;
  if (type === "link")
    return (
      <NavLink
        to={to}
        className={`flex items-center justify-start uppercase tracking-widest font-bold cursor-pointer text-xl border-b border-primary-700 pb-3 pt-3 transition-all hover:text-neutral-200 lg:justify-center ${
          pathname.includes(to) ? "text-neutral-200" : "text-neutral-500"
        }`}
      >
        {children}
      </NavLink>
    );
  if (type === "span")
    return (
      <span
        onClick={onClick}
        className={`flex items-center justify-start uppercase tracking-widest font-bold cursor-pointer text-xl border-b border-primary-700 pb-3 pt-3 transition-all hover:text-neutral-200 lg:justify-center ${
          pathname.includes(to) ? "text-neutral-200" : "text-neutral-500"
        }`}
      >
        {children}
      </span>
    );
}

export default SidebarNavLink;
