import MainNavLink from "./MainNavLink";

function MainNavigation() {
  return (
    <nav>
      <ul className="mx-auto w-full flex h-full justify-center list-none py-5 md:h-fit md:flex-col md:items-center sm:py-2 md:bg-black ">
        <li className=" md:flex md:justify-start">
          <MainNavLink to="/guitars">Guitars</MainNavLink>
        </li>
        <li className="  md:flex md:justify-start">
          <MainNavLink to="/amplifiers">Amplifiers</MainNavLink>
        </li>
        <li className="  md:flex md:justify-start">
          <MainNavLink to="/pickups">Pickups</MainNavLink>
        </li>
        <li className="  md:flex md:justify-start">
          <MainNavLink to="/multieffects">Multi Effects</MainNavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
