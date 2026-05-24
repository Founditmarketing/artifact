type Props = {
  /**
   * Identifier of the facility to load in the Storedge widget.
   * Once the real embed script is dropped in, swap the stub for the
   * actual mount logic (typically a <script> tag that hydrates a div
   * with a known id, e.g. `data-storedge-facility`).
   */
  facility: "nursery" | "45th" | "1st" | "all";
  /** Title shown in the placeholder before the live widget loads. */
  title: string;
  /** Promo / bar caption (e.g. "50% Off · 3 Months"). */
  promo?: string;
  /** Body copy shown in the placeholder. */
  description?: string;
};

const DEFAULT_DESCRIPTION =
  "The Storedge live-inventory widget mounts in this frame. Drop the embed code here once the account is wired up.";

export function StoredgeWidget({
  facility,
  title,
  promo = "50% Off · 3 Months",
  description = DEFAULT_DESCRIPTION,
}: Props) {
  return (
    <div className="widget" data-storedge-facility={facility}>
      <div className="widget-bar">
        <span className="wt">Live Availability</span>
        {promo ? <span className="wb">{promo}</span> : null}
      </div>
      <div className="widget-stage">
        <div className="frame-ico" aria-hidden="true">
          ▦
        </div>
        <div className="sl">{title}</div>
        <div className="sm">{description}</div>
      </div>
    </div>
  );
}
