import { useSignOut } from "../services/useSignOut";
import SidebarNavLink from "./SidebarNavLink";

function AccountSidebar() {
  const { signOut, isPending } = useSignOut();
  return (
    <>
      <SidebarNavLink to={"/account/user"}>user data</SidebarNavLink>
      <SidebarNavLink to={"/account/change-password"}>
        change password
      </SidebarNavLink>
      <SidebarNavLink to={"/account/orders"}>my orders</SidebarNavLink>
      <SidebarNavLink type="span" onClick={signOut}>
        logout
      </SidebarNavLink>
    </>
  );
}

export default AccountSidebar;
