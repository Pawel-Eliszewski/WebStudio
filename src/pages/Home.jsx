import { Hero } from "../components/HeroSection/Hero";
import { Features } from "../components/FeaturesSection/Features";
import { Work } from "../components/OurWorkSection/Work";
import { Team } from "../components/TeamSection/Team";
import { Clients } from "../components/ClientsSection/Clients";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Work />
      <Team />
      <Clients />
    </main>
  );
}
