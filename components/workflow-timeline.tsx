import { CheckCircle2, Clock, Database, Rocket } from "lucide-react";
import { agentConfig } from "@/lib/config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const icons = [Clock, Database, CheckCircle2, Rocket];

export function WorkflowTimeline() {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Operational Workflow</CardTitle>
          <p className="mt-2 max-w-xl text-sm text-slate-400">
            Sequenced automation for the Mumbai lead engine. Each stage can be mapped to
            a dedicated n8n sub-flow or modularized into reusable building blocks.
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <ol className="space-y-5">
          {agentConfig.workflowSteps.map((step, index) => {
            const Icon = icons[index] ?? CheckCircle2;
            return (
              <li
                key={step}
                className="flex gap-4 rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                  <Icon size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Phase {index + 1}
                  </p>
                  <p className="text-base font-medium text-slate-100">{step}</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Key Deliverables: {deliverables[index] ?? defaultDeliverable}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </CardContent>
    </Card>
  );
}

const deliverables = [
  "Structured listings with geocode, category, and review density metrics.",
  "Lead scoring filters applied with industry classification and estimated headcount.",
  "Primary contacts enriched with LinkedIn, work email hypotheses, and role validation.",
  "Final qualified payload exported to Excel and CRM via REST connectors."
];

const defaultDeliverable = "Validated datasets ready for downstream automation.";
