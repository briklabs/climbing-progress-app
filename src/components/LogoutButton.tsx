import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "antd";

export default function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <Button
      className="bg-[#1677ff]"
      type="primary"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </Button>
  );
}
