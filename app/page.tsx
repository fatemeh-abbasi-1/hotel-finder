import Header from "@/components/organism/Header/Header";
import Container from "@/components/atoms/Container/Container";
import Hero from "@/components/organism/Hero/Hero";
import HotelCard from "@/components/organism/HotelCard/HotelCard";
//import HotelsList from "@/components/organism/HotelsList/HotelsList";

export default function Home() {
  return (
    <Container>
      <Header />
      <Hero />
      <HotelCard />
      {/* <HotelsList /> */}
    </Container>
  );
}
