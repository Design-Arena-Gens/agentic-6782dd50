import { Hero } from "@/components/hero";
import { PersonaPanel } from "@/components/persona-panel";
import { MetricCards } from "@/components/metric-cards";
import { SourceGrid } from "@/components/source-grid";
import { EnrichmentStack } from "@/components/enrichment-stack";
import { WorkflowTimeline } from "@/components/workflow-timeline";
import { LeadTable } from "@/components/lead-table";
import { DataSpec } from "@/components/data-spec";
import { ToolingStack } from "@/components/tooling-stack";
import { ExecutionChecklist } from "@/components/execution-checklist";
import { TerritoryMap } from "@/components/territory-map";
import { QualificationRules } from "@/components/qualification-rules";
import { sampleLeads } from "@/lib/config";

export default function Page() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-10 md:py-14">
      <Hero />

      <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <PersonaPanel />
        <MetricCards />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <SourceGrid />
        <EnrichmentStack />
      </section>

      <WorkflowTimeline />

      <section className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <LeadTable leads={sampleLeads} />
        <div className="flex flex-col gap-6">
          <DataSpec />
          <QualificationRules />
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <ToolingStack />
        <ExecutionChecklist />
      </section>

      <TerritoryMap />
    </main>
  );
}
