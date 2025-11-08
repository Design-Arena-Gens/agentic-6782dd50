import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bot,
  Cloud,
  Database,
  Drill,
  LayoutDashboard,
  PlugZap
} from "lucide-react";

const stack = [
  {
    name: "n8n",
    role: "Workflow Orchestrator",
    icon: Bot,
    notes: "Hosts scraping, enrichment, and routing flows with credential vault."
  },
  {
    name: "PostgreSQL",
    role: "Lead Data Warehouse",
    icon: Database,
    notes: "Stores raw and enriched leads with history for scoring iterations."
  },
  {
    name: "Proxycurl / Clay",
    role: "LinkedIn Augmentation",
    icon: PlugZap,
    notes: "Retrieves decision maker roles and public signals."
  },
  {
    name: "SerpAPI",
    role: "Google Search Ingestion",
    icon: Drill,
    notes: "Programmatic SERP scraping focused on Mumbai-based keywords."
  },
  {
    name: "Google Maps API",
    role: "Location Discovery",
    icon: LayoutDashboard,
    notes: "Extracts place IDs, ratings, reviews, and contact data."
  },
  {
    name: "HubSpot CRM",
    role: "Sales Activation",
    icon: Cloud,
    notes: "Receives qualified lead payloads for SDR follow-up."
  }
] as const;

export function ToolingStack() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Systems & Integrations</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-2">
        {stack.map(({ name, role, icon: Icon, notes }) => (
          <div
            key={name}
            className="flex items-start gap-4 rounded-2xl border border-slate-800/60 bg-slate-900/40 p-4"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10 text-brand">
              <Icon size={18} />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-100">{name}</p>
              <p className="text-xs uppercase tracking-wide text-slate-400">{role}</p>
              <p className="mt-2 text-xs text-slate-400">{notes}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
