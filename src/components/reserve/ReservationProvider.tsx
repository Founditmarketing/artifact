"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ReservationModal } from "./ReservationModal";

type ReservationContextValue = {
  isOpen: boolean;
  open: (initialFacility?: string) => void;
  close: () => void;
  /** Used by the modal to pre-select a facility (e.g. from a feature CTA). */
  initialFacility: string | null;
};

const ReservationContext = createContext<ReservationContextValue | null>(null);

/**
 * Global reservation flow. Mounted once at the root layout; any Reserve
 * CTA on the site routes through `useReservation().open()` to bring up
 * the 3-step modal.
 */
export function ReservationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialFacility, setInitialFacility] = useState<string | null>(null);

  const open = useCallback((facility?: string) => {
    setInitialFacility(facility ?? null);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Lock the body when the modal is open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // Esc closes
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const value = useMemo<ReservationContextValue>(
    () => ({ isOpen, open, close, initialFacility }),
    [isOpen, open, close, initialFacility],
  );

  return (
    <ReservationContext.Provider value={value}>
      {children}
      <ReservationModal />
    </ReservationContext.Provider>
  );
}

export function useReservation(): ReservationContextValue {
  const ctx = useContext(ReservationContext);
  if (!ctx) {
    throw new Error(
      "useReservation must be used inside <ReservationProvider>",
    );
  }
  return ctx;
}
