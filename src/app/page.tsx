import { AppHeader } from "@/components/app-header";
import { AppTab } from "@/components/app-tab";

export default function Home() {
  return (
    <div className="w-full lg:w-[50%] mx-auto">
      <AppHeader header="Introduction" />
      <section>
        <div className="container mx-auto p-6 my-2 rounded-lg bg-gradient-to-b from-muted/50 to-muted border-[.2px]">
          <div className="text-lg font-medium">Case Erector Parameter</div>
          <p className="text-sm leading-tight text-muted-foreground">
            Learn about the purpose of the Case Erector Parameter.
          </p>
        </div>
        <div className="mt-5">
          <AppTab />
        </div>
      </section>
    </div>
  );
}
