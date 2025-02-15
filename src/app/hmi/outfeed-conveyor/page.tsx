import { AppHeader } from "@/components/app-header";
import { OutfeedConveyorsTable } from "./table";
import { getOutfeedConveyors } from "@/actions/outfeed-conveyors";

export default async function OutfeedConveyorPage() {
  const outfeedConveyors = await getOutfeedConveyors();

  return (
    <div>
      <AppHeader header="Outfeed Conveyor" />
      <section className="mt-5">
        <OutfeedConveyorsTable outfeedConveyors={outfeedConveyors} />
      </section>
    </div>
  );
}
