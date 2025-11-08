import { Zap } from "lucide-react";
import { automations } from "@/lib/config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AutomationGrid() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {automations.map((automation) => (
        <Card key={automation.title} className="relative overflow-hidden">
          <CardHeader className="flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                <Zap size={18} />
              </div>
              <div>
                <CardTitle>{automation.title}</CardTitle>
                <p className="text-xs uppercase tracking-wide text-brand-light">
                  Trigger: {automation.trigger}
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-400">{automation.description}</p>
          </CardHeader>
          <CardContent>
            <ol className="space-y-2 text-sm text-slate-300">
              {automation.actions.map((action) => (
                <li
                  key={action}
                  className="flex items-start gap-2 rounded-lg bg-slate-900/40 p-3"
                >
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-brand" />
                  <span>{action}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
