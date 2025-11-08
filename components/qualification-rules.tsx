import { Gauge, Target, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const rules = [
  {
    title: "ICP Alignment",
    description:
      "Industry must be among IT, Startups, Digital Marketing, or Finance. Headcount validated between 10 and 1,000.",
    weight: "35%",
    icon: Target
  },
  {
    title: "Decision Maker Reachability",
    description:
      "At least one verified contact for Owner, Manager, Sales Head, or IT Manager with email and phone.",
    weight: "40%",
    icon: Users
  },
  {
    title: "Digital Maturity Score",
    description:
      "Presence of Google services, cloud adoption signals, and recent tech stack investments across public sources.",
    weight: "25%",
    icon: Gauge
  }
] as const;

export function QualificationRules() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Qualification Scoring Matrix</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {rules.map(({ title, description, weight, icon: Icon }) => (
          <div
            key={title}
            className="flex items-start gap-4 rounded-2xl border border-slate-800/60 bg-slate-900/40 p-4"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10 text-brand">
              <Icon size={18} />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-100">{title}</p>
                <span className="rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs text-brand-light">
                  Weight {weight}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-400">{description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
