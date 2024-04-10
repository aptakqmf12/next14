"use client";
import { useEffect } from "react";

export const MSWComponent = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      if (typeof window === "undefined") {
        //  SSR
        const { server } = require("@/mocks/server");
        server.listen();
      } else {
        //  CSR
        const { worker } = require("@/mocks/browser");
        worker.start();
      }
    }
  }, []);

  return null;
};
