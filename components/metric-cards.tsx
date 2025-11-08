import { DatabaseZap, Goal, ShieldCheck, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  {
    title: "Lead Velocity",
    value: "45+ / day",
    description: "Expected qualified leads delivered daily across all channels.",
    icon: Goal
  },
  {
    title: "Data Confidence",
    value: "88%",
    description: "Weighted accuracy score after enrichment and validation.",
    icon: ShieldCheck
  },
  {
    title: "Automation Coverage",
    value: "80%",
    description: "Portion of manual tasks replaced with n8n workflows.",
    icon: DatabaseZap
  },
  {
    title: "Activation SLA",
    value: "< 24 hrs",
    description: "Time to activate new lead campaigns once identified.",
    icon: Trophy
  }
] as const;

export function MetricCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map(({ title, value, description, icon: Icon }) => (
        <Card key={title} className="border-slate-800/70 bg-slate-900/40">
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">{title}</p>
                <p className="mt-2 text-2xl font-semibold text-slate-100">{value}</p>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                <Icon size={20} />
              </div>
            </div>
            <p className="text-sm text-slate-400">{description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
