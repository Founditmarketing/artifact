"use client";

import { useEffect, useRef } from "react";
import { useReservation } from "./ReservationProvider";

/**
 * Drop-in component for routes that should auto-open the reservation
 * modal on arrival (currently only /reserve). Fires once on mount; if
 * the user closes the modal, they're left on the underlying page.
 */
export function ReserveAutoOpen({ facility }: { facility?: string }) {
  const { open } = useReservation();
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    open(facility);
  }, [open, facility]);

  return null;
}
