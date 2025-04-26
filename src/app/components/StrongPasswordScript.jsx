"use client";
import { useEffect } from "react";

export default function StrongPasswordScript() {
  useEffect(() => {
    const loadPreline = async () => {
      const module = await import("@preline/strong-password");
      console.log(module)
      
      // 👇 This is the key change
      if (module?.default) {
        window.HSStrongPassword = module.default;
        console.log("HSStrongPassword set on window.");
      } else {
        console.warn("HSStrongPassword not found in module.");
      }
    };

    loadPreline();
  }, []);

  return null;
}
