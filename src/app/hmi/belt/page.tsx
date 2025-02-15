import { AppHeader } from "@/components/app-header";
import { BeltTable } from "./table";
import { getBelts } from "@/actions/belt";

export default async function BeltsPage() {
  const belts = await getBelts();

  return (
    <div>
      <AppHeader header="Belt" />
      <section className="mt-5">
        <BeltTable belts={belts} />
      </section>
    </div>
  );
}
