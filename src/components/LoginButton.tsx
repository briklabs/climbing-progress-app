import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "antd";

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      type="primary"
      className="bg-black"
      onClick={() =>
        loginWithRedirect({ appState: { returnTo: "/dashboard" } })
      }
    >
      Log in
    </Button>
  );
}
