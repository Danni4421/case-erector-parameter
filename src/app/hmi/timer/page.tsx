import { getTimers } from "@/actions/timer";
import { AppHeader } from "@/components/app-header";
import { TimersTable } from "./table";

export default async function TimerPage() {
  const timers = await getTimers();

  return (
    <div>
      <AppHeader header="Timers" />
      <section className="mt-5">
        <TimersTable timers={timers} />
      </section>
    </div>
  );
}
