import Header from "@/components/organism/Header/Header";
import Container from "@/components/atoms/Container/Container";
import Hero from "@/components/organism/Hero/Hero";
import HotelCard from "@/components/organism/HotelCard/HotelCard";

export default function Home() {
  return (
    <Container>
      <Header />
      <Hero />
      <HotelCard />
    </Container>
  );
}
