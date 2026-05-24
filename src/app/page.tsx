import { PageShell } from "@/components/PageShell";
import { HomeHero } from "@/components/home/HomeHero";
import { Manifesto } from "@/components/home/Manifesto";
import { LocationsIndex } from "@/components/home/LocationsIndex";
import { Catalogue } from "@/components/home/Catalogue";
import { FeatureBoatRV } from "@/components/home/FeatureBoatRV";
import { ReserveSection } from "@/components/home/ReserveSection";
import { Testimony } from "@/components/home/Testimony";
import { FieldNote } from "@/components/home/FieldNote";
import { Closing } from "@/components/home/Closing";

export default function Home() {
  return (
    <PageShell>
      <HomeHero />
      <Manifesto />
      <LocationsIndex />
      <Catalogue />
      <FeatureBoatRV />
      <ReserveSection />
      <Testimony />
      <FieldNote />
      <Closing />
    </PageShell>
  );
}
