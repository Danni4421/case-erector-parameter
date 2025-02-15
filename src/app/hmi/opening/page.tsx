import { AppHeader } from "@/components/app-header";
import { OpeningTable } from "./table";
import { getOpenings } from "@/actions/opening";

export default async function OpeningPage() {
  const openings = await getOpenings();

  return (
    <div>
      <AppHeader header="Opening" />
      <section className="mt-5">
        <OpeningTable openings={openings} />
      </section>
    </div>
  );
}
