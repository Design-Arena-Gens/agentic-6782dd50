"use client";

import { useMemo, useState } from "react";
import { clsx } from "clsx";

type Lead = {
  companyName: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  industry: string;
  website: string;
  address: string;
  confidence: number;
  source: string;
  notes: ReadonlyArray<string>;
};

const industries = ["All", "IT", "Startups", "Digital Marketing", "Finance"];

export function LeadTable({ leads }: { leads: ReadonlyArray<Lead> }) {
  const [industry, setIndustry] = useState<string>("All");
  const [confidence, setConfidence] = useState<number>(70);

  const filtered = useMemo(() => {
    return leads.filter((lead) => {
      const matchesIndustry =
        industry === "All" || lead.industry.toLowerCase() === industry.toLowerCase();
      const matchesConfidence = lead.confidence * 100 >= confidence;
      return matchesIndustry && matchesConfidence;
    });
  }, [leads, industry, confidence]);

  return (
    <div className="flex flex-col gap-6">
      <div className="glass flex flex-col gap-4 rounded-2xl border border-slate-800 p-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
            Smart Filters
          </h4>
          <p className="text-xs text-slate-400">
            Adjust thresholds to focus on the strongest lead candidates by industry and
            confidence score.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <label className="flex flex-col text-xs uppercase tracking-wide text-slate-400">
            Industry
            <select
              value={industry}
              onChange={(event) => setIndustry(event.target.value)}
              className="mt-1 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"
            >
              {industries.map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </label>
          <label className="flex flex-col text-xs uppercase tracking-wide text-slate-400">
            Confidence ≥ {confidence}%
            <input
              type="range"
              min={60}
              max={95}
              step={5}
              value={confidence}
              onChange={(event) => setConfidence(Number(event.target.value))}
              className="mt-2 accent-brand"
            />
          </label>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40">
        <table className="min-w-full table-fixed border-collapse">
          <thead className="bg-slate-900/60 text-left text-sm uppercase tracking-wide text-slate-400">
            <tr>
              <th className="px-4 py-3">Company</th>
              <th className="px-4 py-3">Contact</th>
              <th className="px-4 py-3">Industry</th>
              <th className="px-4 py-3">Confidence</th>
              <th className="px-4 py-3">Source</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-sm text-slate-200">
            {filtered.map((lead) => (
              <tr key={lead.companyName} className="hover:bg-slate-900/60">
                <td className="px-4 py-4">
                  <div className="font-medium text-slate-100">{lead.companyName}</div>
                  <div className="text-xs text-slate-400">{lead.address}</div>
                  <a
                    href={lead.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-brand-light"
                  >
                    {lead.website.replace(/^https?:\/\//, "")}
                  </a>
                </td>
                <td className="px-4 py-4">
                  <div className="font-medium text-slate-100">{lead.contactName}</div>
                  <div className="text-xs text-slate-400">{lead.contactEmail}</div>
                  <div className="text-xs text-slate-400">{lead.contactPhone}</div>
                  <ul className="mt-2 flex flex-wrap gap-2 text-[11px] text-slate-400">
                    {lead.notes.map((note) => (
                      <li
                        key={note}
                        className="rounded-full border border-slate-700/80 px-2 py-1"
                      >
                        {note}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="px-4 py-4">{lead.industry}</td>
                <td className="px-4 py-4">
                  <span
                    className={clsx(
                      "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
                      {
                        "bg-emerald-500/20 text-emerald-300": lead.confidence >= 0.8,
                        "bg-amber-500/20 text-amber-300":
                          lead.confidence < 0.8 && lead.confidence >= 0.7,
                        "bg-rose-500/20 text-rose-300": lead.confidence < 0.7
                      }
                    )}
                  >
                    {(lead.confidence * 100).toFixed(0)}%
                  </span>
                </td>
                <td className="px-4 py-4 text-slate-300">{lead.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="px-4 py-6 text-center text-sm text-slate-400">
            No leads match the current filters. Try broadening your criteria.
          </div>
        )}
      </div>
    </div>
  );
}
