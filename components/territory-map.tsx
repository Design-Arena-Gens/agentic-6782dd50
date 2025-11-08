import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const clusters = [
  {
    area: "Bandra Kurla Complex",
    focus: "Enterprise HQs, financial services, mature IT",
    momentum: "High"
  },
  {
    area: "Andheri & Powai",
    focus: "Startups, digital marketing agencies, SaaS",
    momentum: "Very High"
  },
  {
    area: "Navi Mumbai",
    focus: "IT parks, back-office operations, BPO",
    momentum: "Medium"
  },
  {
    area: "Lower Parel",
    focus: "Creative agencies, fintech, venture-backed tech",
    momentum: "High"
  }
] as const;

export function TerritoryMap() {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Mumbai Target Clusters</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-brand/20 via-slate-900 to-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(26,115,232,0.25),_transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_65%,_rgba(66,133,244,0.2),_transparent_60%)]" />
          <div className="relative flex min-h-[280px] flex-col justify-between p-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-200/70">
                Geo Strategy Overlay
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-50">
                Prioritize dense corridors with strong Google adoption signals.
              </h3>
            </div>
            <p className="max-w-md text-sm text-slate-200">
              Apply weighted crawl frequencies and outreach cadences based on market
              momentum to capture demand faster than competitors.
            </p>
          </div>
        </div>
        <ul className="space-y-3">
          {clusters.map((cluster) => (
            <li
              key={cluster.area}
              className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-4"
            >
              <div className="flex items-center justify-between text-sm text-slate-300">
                <p className="font-semibold text-slate-100">{cluster.area}</p>
                <span className="rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-[11px] uppercase tracking-wide text-brand-light">
                  {cluster.momentum}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-400">{cluster.focus}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
