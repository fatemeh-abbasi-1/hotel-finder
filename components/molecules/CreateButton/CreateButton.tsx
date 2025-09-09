import { IoIosAddCircleOutline } from "react-icons/io";

import Text from "@/components/atoms/Text/Text";

const CreateButton = () => {
  return (
    <div className="flex gap-2">
      <IoIosAddCircleOutline className="text-3xl" />
      <Text className="mr-6" variant="medium">
        Create
      </Text>
    </div>
  );
};

export default CreateButton;
