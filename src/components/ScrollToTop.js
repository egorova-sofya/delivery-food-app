import { useEffect } from "react";
import { useLocation } from "react-router";

import React from "react";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
