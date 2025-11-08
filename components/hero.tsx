import { agentConfig } from "@/lib/config";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-brand/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 p-10 shadow-lg">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_#1a73e810,_transparent_65%)]" />
      <div className="flex flex-col gap-6">
        <p className="text-xs uppercase tracking-[0.4em] text-brand-light">
          Mumbai • Google • Lead Engine
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl">
          Build a relentless pipeline of Google-ready businesses across Mumbai&apos;s
          fastest-growing sectors.
        </h1>
        <p className="max-w-2xl text-base text-slate-300">
          {agentConfig.objective} This workspace packages the complete automation stack,
          data specification, and qualification logic so teams can launch targeted
          outreach within hours.
        </p>
        <div className="flex flex-wrap gap-3">
          <Pill label="Target: Mumbai" />
          <Pill label="Focus: Google Cloud · Workspace" />
          <Pill label="Automation: n8n" />
          <Pill label="Contacts: Owner · Manager · Sales · IT" />
        </div>
      </div>
    </section>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-brand/40 bg-brand/10 px-4 py-2 text-xs font-medium uppercase tracking-wide text-brand-light">
      {label}
    </span>
  );
}
