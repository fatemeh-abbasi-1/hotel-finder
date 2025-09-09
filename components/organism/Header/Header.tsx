import Button from "@/components/atoms/Button/Button";
import Text from "@/components/atoms/Text/Text";
import Navbar from "@/components/molecules/Navbar/Navbar";
import UserInfo from "@/components/molecules/UserInfo/UserInfo";

const Header = () => {
  return (
    <header className="w-full h-28 flex justify-between py-8">
      <Text variant="medium">Logo</Text>
      <div className="flex">
        <Navbar />
        {/* <UserInfo /> */}
        <Button>Sign Up</Button>
      </div>
    </header>
  );
};

export default Header;
