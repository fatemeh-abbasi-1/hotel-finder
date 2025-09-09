import { IoExitOutline } from "react-icons/io5";

import Text from "@/components/atoms/Text/Text";

const SignOutButton = () => {
  return (
    <div className="flex gap-2">
      <IoExitOutline className="text-3xl" />
      <Text variant="medium">Sign Out</Text>
    </div>
  );
};

export default SignOutButton;
