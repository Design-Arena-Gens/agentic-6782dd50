import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { agentConfig } from "@/lib/config";

export function PersonaPanel() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <Badge>Agent Identity</Badge>
          <CardTitle className="text-2xl">{agentConfig.agentName}</CardTitle>
          <p className="text-sm text-slate-400">{agentConfig.personaPrompt}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <InfoBlock
            label="Objective"
            value={agentConfig.objective}
          />
          <InfoBlock
            label="Primary Location"
            value={agentConfig.targetLocation}
          />
          <InfoBlock
            label="Automation Platform"
            value={agentConfig.automationPlatform}
          />
          <InfoBlock
            label="Lead Criteria"
            value={`Headcount ${agentConfig.leadCriteria.companySize}, roles: ${agentConfig.leadCriteria.contactsRequired.join(", ")}`}
          />
        </div>
      </CardContent>
    </Card>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4">
      <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-2 text-sm text-slate-200">{value}</p>
    </div>
  );
}
