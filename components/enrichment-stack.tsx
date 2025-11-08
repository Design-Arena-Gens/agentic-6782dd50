import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { agentConfig } from "@/lib/config";
import { Binary, Link2, Shield } from "lucide-react";

const iconMap: Record<string, typeof Link2> = {
  "LinkedIn profile lookup": Link2,
  "Website scraping for contacts": Binary,
  "Domain verification": Shield
};

export function EnrichmentStack() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <Badge>Enrichment</Badge>
          <p className="text-sm text-slate-400">
            Layered data enhancements that increase reachability and decision-maker
            accuracy.
          </p>
        </div>
        <div className="space-y-4">
          {agentConfig.dataEnrichment.map((item) => {
            const Icon = iconMap[item] ?? Link2;
            return (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-200">{item}</p>
                  <p className="mt-2 text-xs text-slate-400">
                    {enrichmentDescriptions[item as keyof typeof enrichmentDescriptions] ??
                      fallback}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

const fallback =
  "Configured within the enrichment workflow to add depth and verify contact data.";

const enrichmentDescriptions = {
  "LinkedIn profile lookup":
    "Use enrichment APIs (e.g., Proxycurl or Clay) to pull role, tenure, and activity signals.",
  "Website scraping for contacts":
    "Parse contact pages and team directories to identify executives and sales leadership.",
  "Domain verification":
    "Validate MX records and run SMTP pings to ensure emails are deliverable."
};
