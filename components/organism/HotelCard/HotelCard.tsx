import Image from "@/components/atoms/Image/Image";
import Title from "@/components/atoms/Title/Title";
import Text from "@/components/atoms/Text/Text";
import Button from "@/components/atoms/Button/Button";
import HotelStars from "@/components/molecules/HotelStars/HotelStars";

const HotelCard = () => {
  return (
    <div className="flex flex-col p-3 gap-3 w-96 h-[460px] bg-white border-4 border-black rounded-2xl">
      <div className="flex justify-end">
        <HotelStars starCount={5} />
      </div>
      <Image
        alt="hotel-image"
        src={"/Images/hotel.jpg"}
        width={360}
        height={340}
      />
      <Title variant="medium">Parsian Hotel</Title>
      <Text variant="medium">Tehran,mir damad</Text>
      <Text variant="medium">Cost of one night : 1000000</Text>
      <div className="flex justify-end p-1"><Button variant="small">See Detils</Button></div>
    
    </div>
  );
};

export default HotelCard;
