import { NavLink, useLocation } from "react-router-dom";

function MainNavLink({ children, to }) {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <NavLink
      to={to}
      className={`visited:link ${
        pathname === to
          ? "text-neutral-200 border-b border-neutral-300"
          : "text-neutral-500"
      } visited:link:active:no-underline uppercase tracking-[4px] px-8 text-2xl py-5 hover:text-neutral-200 font-normal md:text-4xl md:text-neutral-200 md:border-none transition-colors`}
    >
      {children}
    </NavLink>
  );
}

export default MainNavLink;
