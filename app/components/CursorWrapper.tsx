"use client";

import { useEffect, useState } from "react";
import TargetCursor from "./TargetCursor";

export default function CursorWrapper() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (isMobile) return null; // hide on mobile

  return <TargetCursor spinDuration={2} hideDefaultCursor={true} />;
}
