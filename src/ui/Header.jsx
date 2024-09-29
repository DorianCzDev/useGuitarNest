import MainNavigation from "./MainNavigation";
import Menu from "./Menu";

function Header() {
  return (
    <header className="w-full py-2 grid grid-rows-[1fr_auto] h-64 xl:w-full  sm:grid-rows-[100px_auto] md:h-auto">
      <div className="w-3/4 mx-auto xl:w-full ">
        <Menu />
      </div>
      <div className="w-full border-t border-t-primary-700">
        <MainNavigation />
      </div>
    </header>
  );
}

export default Header;
