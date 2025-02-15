import { AppHeader } from "@/components/app-header";
import { TransfersTable } from "./table";
import { getTransfers } from "@/actions/transfer";

export default async function TransfersPage() {
  const transfers = await getTransfers();

  return (
    <div>
      <AppHeader header="Transfers" />
      <section className="mt-5">
        <TransfersTable transfers={transfers} />
      </section>
    </div>
  );
}
