//import Image from "next/image";
import Text from "@/components/atoms/Text/Text";

const UserInfo = () => {
  return (
    <div className="flex gap-3 p-3">
      <Text variant="medium">fatemeh</Text>
      {/* <Image
        alt="user-image"
        // src={""}
        className="w-[50px] h-[50px] rounded-full bg-amber-50 border-4 border-purple-500 outline-2 outline-black"
      /> */}
    </div>
  );
};

export default UserInfo;
