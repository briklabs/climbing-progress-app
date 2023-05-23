import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "antd";

export default function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <Button
      type="primary"
      className="bg-black"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </Button>
  );
}
