import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { agentConfig } from "@/lib/config";

export function DataSpec() {
  return (
    <Card>
      <CardHeader className="flex-col gap-4">
        <div className="flex items-center gap-3">
          <Badge>Data Model</Badge>
          <CardTitle className="text-xl">Lead Output Schema</CardTitle>
        </div>
        <p className="text-sm text-slate-400">
          Each lead record conforms to the schema below for seamless ingestion into Excel
          or CRM platforms. Fields align with the downstream sales enablement workflow.
        </p>
      </CardHeader>
      <CardContent className="grid gap-5 md:grid-cols-2">
        {agentConfig.outputFields.map((field) => (
          <div
            key={field}
            className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4"
          >
            <p className="text-sm font-medium text-slate-200">{field}</p>
            <p className="mt-2 text-xs text-slate-400">
              {fieldDescriptions[field as keyof typeof fieldDescriptions] ??
                "Captured automatically or via enrichment pipeline."}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

const fieldDescriptions = {
  "Company Name": "Legal name pulled from Google listing enriched with LinkedIn if available.",
  "Contact Name": "Primary decision maker discovered through LinkedIn signals or company pages.",
  "Contact Email": "Validated work email after domain verification and SMTP checks.",
  "Contact Phone": "Direct line or reception number cross-checked with public sources.",
  Industry: "Mapped to focus verticals using NLP classification on listing descriptions.",
  "Company Website": "Normalized domain validated for active SSL and MX records.",
  Address: "Standardized street address with geo coordinates for territory planning."
};
