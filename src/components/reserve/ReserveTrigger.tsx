"use client";

import type {
  ButtonHTMLAttributes,
  MouseEvent as ReactMouseEvent,
  ReactNode,
} from "react";
import { useReservation } from "./ReservationProvider";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  /** Optional facility slug to pre-select on open. */
  facility?: string;
};

/**
 * Drop-in button that opens the global reservation modal. Use anywhere
 * the page previously rendered a <Link href="/reserve">; keeps the same
 * styling hooks (className) and supports pre-selecting a facility. A
 * consumer-supplied onClick still fires (chained before the modal
 * opens) so callers can close their own popovers, etc.
 */
export function ReserveTrigger({
  children,
  facility,
  className,
  type = "button",
  onClick,
  ...rest
}: Props) {
  const { open } = useReservation();
  const handle = (e: ReactMouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    open(facility);
  };
  return (
    <button type={type} className={className} onClick={handle} {...rest}>
      {children}
    </button>
  );
}
