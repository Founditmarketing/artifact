import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <section className="page-head">
        <div className="head-top">
          <div className="cell">
            <span>Reference</span>
            <b>§ Missing Entry</b>
          </div>
          <div className="cell">
            <span>Status</span>
            <b>Not Catalogued</b>
          </div>
          <div className="cell">
            <span>Code</span>
            <b>404</b>
          </div>
        </div>
        <div className="head-main">
          <div className="acc">AS·E-404 / Not in the Catalogue</div>
          <h1>
            This page isn&apos;t
            <br />
            <em>in our archive.</em>
          </h1>
          <p className="lede">
            The entry you&apos;re looking for hasn&apos;t been catalogued, or
            it may have been moved to another shelf. Try one of the holdings
            below.
          </p>
          <div className="lhero-actions" style={{ paddingTop: 36 }}>
            <Link href="/" className="btn btn-primary">
              Return to Index <span className="arr">→</span>
            </Link>
            <Link href="/#index" className="btn btn-ghost">
              Browse the Holdings
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
