import HeroHeader from "@/components/home-page/heroHeader";
import HeroImg from "@/components/home-page/heroImg";
import HeroContent from "@/components/home-page/heroContent";

export default function HomePage() {
  return (
    <div className="relative h-screen">
      <HeroImg />
      <HeroHeader />
      <HeroContent />
    </div>
  );
}
