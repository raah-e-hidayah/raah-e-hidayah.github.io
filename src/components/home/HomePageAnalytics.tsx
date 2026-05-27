"use client";

import { useEffect } from "react";
import { trackEvent } from "@/services/firebase";

export function HomePageAnalytics() {
  useEffect(() => {
    trackEvent("page_view", {
      page_title: "Home",
      page_path: "/",
      page_location: window.location.href,
    });
  }, []);

  return null;
}
