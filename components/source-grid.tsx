import { Compass, Globe2, MapPin } from "lucide-react";
import { agentConfig } from "@/lib/config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const iconMap: Record<string, typeof Compass> = {
  "Google Search": Globe2,
  "Google Maps": MapPin,
  "Google Workspace business listings": Compass
};

export function SourceGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {agentConfig.leadSources.map((source) => {
        const Icon = iconMap[source] ?? Compass;
        return (
          <Card key={source}>
            <CardHeader className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                <Icon size={18} />
              </div>
              <CardTitle className="text-lg">{source}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-400">
              {sourceDescriptions[source as keyof typeof sourceDescriptions] ??
                defaultDescription}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

const defaultDescription =
  "Primary discovery source powering the initial crawl for Mumbai-based businesses.";

const sourceDescriptions = {
  "Google Search":
    "Automated SERP parsing with query templates (\"Google Cloud Partner Mumbai\", \"Google Workspace setup\") to capture net-new prospects.",
  "Google Maps":
    "Location-constrained scrape across BKC, Andheri, Powai and Navi Mumbai to surface office-based companies with high review volume.",
  "Google Workspace business listings":
    "Official Workspace partner directory used to identify collaboration-ready clients with existing Google stack adoption."
};
