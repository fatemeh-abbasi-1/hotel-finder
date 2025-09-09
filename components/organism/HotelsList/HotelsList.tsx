import { client } from "@/sanity/lib/client";
import { allHotelsQueries } from "@/sanity/lib/queries";

//import HotelCard from "../HotelCard/HotelCard";

const HotelsList = async () => {
  const data = await client.fetch(allHotelsQueries);
  console.log(data);

  return <div>hellllooooo</div>;
};

export default HotelsList;
