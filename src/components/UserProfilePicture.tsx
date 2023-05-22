import { useAuth0 } from "@auth0/auth0-react";

export default function UserProfilePicture() {
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  const { picture } = user;

  return (
    <figure className="h-16 w-16 rounded-full overflow-hidden border-2">
      <picture className="block h-full w-full">
        <img
          src={picture}
          alt="Profile"
          className=" object-cover h-full w-full"
        />
      </picture>
    </figure>
  );
}
