import { useEffect } from "react";

export function useVisitTracker() {
  useEffect(() => {
    if (sessionStorage.getItem("visit_counted")) return;

    fetch(`${import.meta.env.VITE_API_URL}/api/stats/visit`, {
      method: "POST",
    }).catch(() => {});

    sessionStorage.setItem("visit_counted", "true");
  }, []);
}
