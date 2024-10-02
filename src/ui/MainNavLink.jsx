import { NavLink, useLocation } from "react-router-dom";

function MainNavLink({ children, to }) {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <NavLink
      to={to}
      className={`visited:link ${
        pathname === to
          ? "text-fontPrimary-500 border-b border-fontPrimary-500"
          : "text-fontPrimary-700"
      } visited:link:active:no-underline uppercase tracking-[4px] px-8 text-2xl py-5 hover:text-fontPrimary-500  font-normal md:text-4xl md:text-neutral-200 md:border-none transition-colors`}
    >
      {children}
    </NavLink>
  );
}

export default MainNavLink;
