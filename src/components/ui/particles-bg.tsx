"use client";

import { useEffect, useCallback } from "react";

export default function ParticlesComponent() {
  const initParticles = useCallback((isDark: boolean) => {
    const oldCanvas = document.querySelector("#particles-js canvas");
    if (oldCanvas) oldCanvas.remove();

    // @ts-ignore
    if (window.pJSDom?.length > 0) {
      // @ts-ignore
      window.pJSDom.forEach((p) => p.pJS.fn.vendors.destroypJS());
      // @ts-ignore
      window.pJSDom = [];
    }

    const colors = isDark
      ? {
          particles: ["#38bdf8", "#22d3ee", "#60a5fa"],
          lines: "#22d3ee",
          accent: "#a5f3fc",
        }
      : {
          particles: ["#0077ff", "#00b8ff", "#22d3ee"],
          lines: "#0ea5e9",
          accent: "#7dd3fc",
        };

    // @ts-ignore
    window.particlesJS("particles-js", {
      particles: {
        number: { value: 170, density: { enable: true, value_area: 800 } },
        color: { value: colors.particles },
        shape: { type: "circle", stroke: { width: 0.8, color: colors.accent } },
        opacity: {
          value: 0.9,
          random: true,
          anim: { enable: true, speed: 1.2, opacity_min: 0.45 },
        },
        size: {
          value: 3.6,
          random: true,
          anim: { enable: true, speed: 2.4, size_min: 1.2 },
        },
        line_linked: {
          enable: true,
          distance: 160,
          color: colors.lines,
          opacity: 0.58,
          width: 1.45,
        },
        move: { enable: true, speed: 2.4, random: true, out_mode: "bounce" },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 220, line_linked: { opacity: 0.8 } },
          push: { particles_nb: 4 },
          repulse: { distance: 180, duration: 0.4 },
        },
      },
      retina_detect: true,
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.async = true;
    document.body.appendChild(script);

    let observer: MutationObserver | null = null;

    script.onload = () => {
      const html = document.documentElement;
      const detectDark = () =>
        html.classList.contains("dark") ||
        html.getAttribute("data-theme") === "dark";

      initParticles(detectDark());

      observer = new MutationObserver(() =>
        initParticles(detectDark())
      );
      observer.observe(html, {
        attributes: true,
        attributeFilter: ["class", "data-theme"],
      });
    };

    return () => {
      observer?.disconnect();
      if (script.parentNode) {
        document.body.removeChild(script);
      }
      const oldCanvas = document.querySelector("#particles-js canvas");
      if (oldCanvas) oldCanvas.remove();
      // @ts-ignore
      if (window.pJSDom?.length > 0) {
        // @ts-ignore
        window.pJSDom.forEach((p) => p.pJS.fn.vendors.destroypJS());
        // @ts-ignore
        window.pJSDom = [];
      }
    };
  }, [initParticles]);

  return (
    <div
      id="particles-js"
      className={`
        absolute left-0 top-0 h-screen w-full
        transition-colors duration-500
        bg-gradient-to-tr from-[#dff6ff] via-[#7dd3fc] to-[#2563eb]
        dark:from-[#001437] dark:via-[#0052cc] dark:to-[#00d4ff]
      `}
    />
  );
}
