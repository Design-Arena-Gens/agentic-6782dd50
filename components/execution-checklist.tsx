import { Checkbox, type CheckboxProps } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const checklist = [
  {
    title: "Configure Google scraping endpoints",
    details:
      "Finalize API keys or proxy configuration for Google Search and Maps requests with Mumbai geofence.",
    optional: false
  },
  {
    title: "Set up n8n environment",
    details:
      "Deploy Dockerized n8n instance with secure credentials vault and credentials for enrichment providers.",
    optional: false
  },
  {
    title: "Integrate CRM destination",
    details:
      "Connect HubSpot or preferred CRM via OAuth to push qualified leads with lifecycle stage mapping.",
    optional: true
  },
  {
    title: "Define outreach playbooks",
    details:
      "Draft intro sequences tailored to Google Workspace upgrades, Google Cloud modernization, and co-marketing offers.",
    optional: true
  }
] as const;

export function ExecutionChecklist() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activation Checklist</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {checklist.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-3 rounded-2xl border border-slate-800/60 bg-slate-900/40 p-4"
          >
            <Checkbox checked className="mt-1" readOnly />
            <div>
              <p className="text-sm font-medium text-slate-100">
                {item.title}{" "}
                {item.optional && (
                  <span className="ml-2 rounded-full border border-slate-700 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-400">
                    Optional
                  </span>
                )}
              </p>
              <p className="mt-2 text-xs text-slate-400">{item.details}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
