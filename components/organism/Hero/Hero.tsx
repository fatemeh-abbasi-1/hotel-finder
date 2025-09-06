import BackGround from "@/components/molecules/BackGround/BackGround";
import Title from "@/components/atoms/Title/Title";
import Text from "@/components/atoms/Text/Text";

const Hero = () => {
  return (
    <div className="mt-16 mb-32 relative">
      <BackGround />
      <div className="flex flex-col gap-8 absolute top-20 left-[420px] w-1/2 items-center ">
        <Title variant="large" bg={true}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa,
          expedita. Explicabo, laudantium.
        </Title>
        <Text bg={true} variant="large">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
      </div>
    </div>
  );
};

export default Hero;
