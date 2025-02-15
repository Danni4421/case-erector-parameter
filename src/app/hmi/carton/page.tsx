import { AppHeader } from "@/components/app-header";
import { CartonTable } from "./table";
import { getCartons } from "@/actions/carton";

export default async function CartonPage() {
  const cartons = await getCartons();

  return (
    <div>
      <AppHeader header="Carton" />
      <section className="mt-5">
        <CartonTable cartons={cartons} />
      </section>
    </div>
  );
}
