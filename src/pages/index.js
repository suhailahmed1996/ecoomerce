import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";

const healthStats = [
  { label: "Net revenue (today)", value: "₹4,82,300", trend: "+12.4%" },
  { label: "Net revenue (week)", value: "₹31,95,000", trend: "+9.1%" },
  { label: "Net profit estimate", value: "₹7,86,000", trend: "+5.8%" },
  { label: "Cash at risk", value: "₹2,10,000", trend: "Needs review" },
  { label: "Stockout risks", value: "7 SKUs", trend: "3 critical" },
  { label: "Refund rate", value: "4.1%", trend: "-0.6%" }
];

const approvals = [
  {
    title: "Restock SKU-YOGA-MAT",
    proposedBy: "COO",
    supportedBy: "CFO",
    reason: "Stock cover in 4.8 days with velocity +18% WoW.",
    cost: "₹1,25,000",
    upside: "₹3,40,000 incremental gross revenue",
    risk: "Top seller stockout in under 5 days",
    confidence: "0.87"
  },
  {
    title: "Raise serum price by 6%",
    proposedBy: "CFO",
    supportedBy: "CMO",
    reason: "Margin compression from shipping and packaging costs.",
    cost: "No direct cost",
    upside: "+3.2pp category margin",
    risk: "Conversion dip if messaging is weak",
    confidence: "0.74"
  },
  {
    title: "Pause Meta ads for SKU-FOAM-ROLLER",
    proposedBy: "CMO",
    supportedBy: "CFO",
    reason: "ROAS below 1.8 for 48h with spend above threshold.",
    cost: "Opportunity cost only",
    upside: "Protect ₹45,000/week in inefficient spend",
    risk: "Loss of top-funnel traffic on this SKU",
    confidence: "0.91"
  }
];

const redFlags = [
  "ROAS crash in paid social for Home Fitness segment (severity: high)",
  "Delayed shipments +32% in west zone over last 48h (severity: high)",
  "Vendor concentration risk: 31% GMV tied to top vendor (severity: medium)",
  "Refund spike on SKU-CUTTING-BOARD due to quality complaints (severity: medium)"
];

const opportunities = [
  "Scale winner: SKINCARE-SERUM has margin >60% and repeat rate at 44%",
  "Bundle candidate: YOGA-MAT + FOAM-ROLLER with discounted checkout offer",
  "Retention move: Launch 7/14/30 day post-purchase flow for Smart Bottle segment",
  "Dead-stock clearance: Create “kitchen essentials” bundle for slow moving SKUs"
];

const roles = [
  {
    role: "CFO",
    auto:
      "Flag suspicious spend, tighten ad budget within safe band, mark negative margin SKUs",
    wait:
      "Price increases above safe band, budget reallocation, refund exceptions",
    never: "Brand positioning, market expansion, debt/financing commitments"
  },
  {
    role: "COO",
    auto:
      "Low-stock alerts, procurement drafts under cap, out-of-stock campaign pause requests",
    wait: "Large restocks, supplier switch, aggressive dead-stock discounting",
    never:
      "Warehouse migration, long-term supplier contracts, sourcing region changes"
  },
  {
    role: "CMO",
    auto:
      "Pause poor ROAS ad sets, micro budget shifts, trigger lifecycle email tests",
    wait: "Large campaigns, new channels, major discount programs",
    never: "Brand overhauls, strategic expansion commitments, agency lock-ins"
  },
  {
    role: "Support",
    auto:
      "Tracking replies, FAQ responses, policy-matching refunds under threshold",
    wait:
      "VIP exceptions, high-value refunds, reputation-sensitive escalations",
    never: "Legal threats, crisis comms, policy rewrites"
  }
];

const eventLog = [
  {
    event: "STOCKOUT_RISK",
    source: "COO",
    target: "Founder queue",
    action: "Recommend urgent restock with cash impact estimate"
  },
  {
    event: "AD_ROAS_DROP",
    source: "CMO",
    target: "CFO + Founder queue",
    action:
      "Auto-pause under threshold and request budget reallocation approval"
  },
  {
    event: "REFUND_SPIKE",
    source: "Support",
    target: "COO + CEO",
    action: "Route defect trend to operations with SKU-level evidence"
  }
];

const sourceMap = [
  {
    area: "Commerce",
    sources: "WooCommerce orders, products, refunds, stock, coupons"
  },
  {
    area: "Marketing",
    sources: "Meta Ads, Google Ads, TikTok Ads, email platform, GA4"
  },
  {
    area: "Operations",
    sources: "Shipping events, warehouse timelines, supplier lead-time signals"
  },
  {
    area: "Support",
    sources: "Helpdesk/chat inbox, reviews, CSAT and complaint tags"
  },
  {
    area: "Finance",
    sources: "Gateway settlements, COGS metadata, payout and tax records"
  }
];

export default () => (
  <StaticQuery
    query={graphql`
      query FounderDashboardQuery {
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `}
    render={data => (
      <Layout site={data.site}>
        <main className="Board">
          <section className="Board__hero">
            <p className="Board__eyebrow">AI BOARD OPERATING SYSTEM</p>
            <h2>Founder Command Center</h2>
            <p>
              A decision system that detects, decides, delegates, and escalates
              with bounded agent authority.
            </p>
          </section>

          <section className="Board__section">
            <h3>Today&apos;s Health</h3>
            <div className="BoardGrid BoardGrid--stats">
              {healthStats.map(item => (
                <article key={item.label} className="Card">
                  <p className="Card__label">{item.label}</p>
                  <p className="Card__value">{item.value}</p>
                  <p className="Card__meta">{item.trend}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="Board__section">
            <h3>Approval Queue</h3>
            <div className="BoardGrid">
              {approvals.map(item => (
                <article key={item.title} className="Card Card--approval">
                  <h4>{item.title}</h4>
                  <p>
                    <strong>Proposed by:</strong> {item.proposedBy} ·{" "}
                    <strong>Supported by:</strong> {item.supportedBy}
                  </p>
                  <p>{item.reason}</p>
                  <ul>
                    <li>
                      <strong>Cost:</strong> {item.cost}
                    </li>
                    <li>
                      <strong>Upside:</strong> {item.upside}
                    </li>
                    <li>
                      <strong>Risk if ignored:</strong> {item.risk}
                    </li>
                    <li>
                      <strong>Confidence:</strong> {item.confidence}
                    </li>
                  </ul>
                  <div className="Card__actions">
                    <button type="button">Approve</button>
                    <button type="button">Hold</button>
                    <button type="button">Reject</button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="Board__section BoardGrid BoardGrid--two">
            <article className="Card">
              <h3>Red Flags</h3>
              <ul>
                {redFlags.map(flag => (
                  <li key={flag}>{flag}</li>
                ))}
              </ul>
            </article>
            <article className="Card">
              <h3>Weekly Opportunities</h3>
              <ul>
                {opportunities.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </section>

          <section className="Board__section">
            <h3>Decision Rights Matrix</h3>
            <div className="TableWrap">
              <table className="BoardTable">
                <thead>
                  <tr>
                    <th>Agent</th>
                    <th>Auto-execute</th>
                    <th>Recommend &amp; wait</th>
                    <th>Never decide</th>
                  </tr>
                </thead>
                <tbody>
                  {roles.map(row => (
                    <tr key={row.role}>
                      <td>{row.role}</td>
                      <td>{row.auto}</td>
                      <td>{row.wait}</td>
                      <td>{row.never}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="Board__section BoardGrid BoardGrid--two">
            <article className="Card">
              <h3>Source of Truth Map</h3>
              <ul>
                {sourceMap.map(item => (
                  <li key={item.area}>
                    <strong>{item.area}:</strong> {item.sources}
                  </li>
                ))}
              </ul>
            </article>
            <article className="Card">
              <h3>Event Handoff Log (sample)</h3>
              <ul>
                {eventLog.map(item => (
                  <li key={item.event}>
                    <strong>{item.event}:</strong> {item.source} → {item.target}
                    . {item.action}.
                  </li>
                ))}
              </ul>
            </article>
          </section>
        </main>
      </Layout>
    )}
  />
);
