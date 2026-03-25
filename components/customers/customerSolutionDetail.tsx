import type { SolutionBlock } from "@/lib/customer-story-types";

function formatFieldLabel(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (c) => c.toUpperCase())
    .trim();
}

export function SolutionBlockDetail({ block }: { block: SolutionBlock }) {
  return (
    <div className="space-y-6 pt-2 text-sm leading-relaxed text-neutral-600">
      {block.content ? <p>{block.content}</p> : null}

      {block.bundles && block.bundles.length > 0 ? (
        <div className="overflow-x-auto rounded-xl border border-neutral-200/80 bg-white">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-neutral-100 bg-neutral-50">
                <th className="px-4 py-3 font-semibold text-[#24282B]">Bundle</th>
                <th className="px-4 py-3 font-semibold text-[#24282B]">Products</th>
                <th className="px-4 py-3 font-semibold text-[#24282B]">Impact</th>
              </tr>
            </thead>
            <tbody>
              {block.bundles.map((b) => (
                <tr key={b.name} className="border-b border-neutral-50 last:border-0">
                  <td className="px-4 py-3 font-medium text-[#24282B]">{b.name}</td>
                  <td className="px-4 py-3">{b.products}</td>
                  <td className="px-4 py-3">{b.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}

      {block.scenarios && block.scenarios.length > 0 ? (
        <div className="space-y-4">
          {block.scenarios.map((s) => (
            <div key={s.provider} className="rounded-xl border border-neutral-200/80 bg-white p-5">
              <h4 className="text-base font-semibold text-[#24282B] mb-2">{s.provider}</h4>
              <p className="mb-3">{s.details}</p>
              <dl className="grid gap-2">
                {Object.entries(s.projections).map(([k, v]) => (
                  <div key={k} className="flex flex-wrap gap-2">
                    <dt className="font-medium text-[#24282B]">{formatFieldLabel(k)}:</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      ) : null}

      {block.segments && block.segments.length > 0 ? (
        <div className="space-y-3">
          {block.segments.map((seg, i) => (
            <div key={i} className="rounded-xl border border-neutral-200/80 bg-white p-4">
              {Object.entries(seg).map(([k, v]) => (
                <p key={k} className="mb-2 last:mb-0">
                  <span className="font-medium text-[#24282B]">{formatFieldLabel(k)}: </span>
                  {v}
                </p>
              ))}
            </div>
          ))}
        </div>
      ) : null}

      {block.examples && block.examples.length > 0 ? (
        <ul className="space-y-3">
          {block.examples.map((ex) => (
            <li key={ex.provider} className="rounded-xl border border-neutral-200/80 bg-white p-4">
              <p className="font-semibold text-[#24282B] mb-1">{ex.provider}</p>
              <p>{ex.positioning}</p>
            </li>
          ))}
        </ul>
      ) : null}

      {block.productLadder && block.productLadder.length > 0 ? (
        <ul className="rounded-xl border border-[#2CADB2]/25 bg-[#2CADB2]/[0.06] p-4 space-y-2">
          {block.productLadder.map((r, i) => (
            <li key={i}>
              <span className="font-medium text-[#24282B]">
                {r.from} → {r.to}
              </span>
              <span className="text-[#2CADB2]"> — </span>
              {r.reason}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function TierObjectCard({ tier }: { tier: Record<string, string | number> }) {
  return (
    <div className="rounded-xl border border-neutral-200/80 bg-white p-4 text-sm">
      <ul className="space-y-2 text-neutral-600">
        {Object.entries(tier).map(([k, v]) => (
          <li key={k}>
            <span className="font-medium text-[#24282B]">{formatFieldLabel(k)}: </span>
            {String(v)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BundleFrameworksDetail({
  bundleFrameworks,
}: {
  bundleFrameworks: {
    heading: string;
    frameworks: Array<{ providerType: string; tiers: Array<Record<string, string | number>> }>;
  };
}) {
  return (
    <div className="space-y-10 pt-2">
      {bundleFrameworks.frameworks.map((fw) => (
        <div key={fw.providerType}>
          <h3 className="text-base font-semibold text-[#2CADB2] mb-4">{fw.providerType}</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {fw.tiers.map((tier, i) => (
              <TierObjectCard key={i} tier={tier} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
