// src/components/LogoLoop.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import "./LogoLoop.css";

export default function LogoLoop({
  logos = [],
  speed = 100, // px / second
  direction = "left", // "left" | "right"
  logoHeight = 28,
  gap = 32,
  hoverSpeed = 0, // 0 = pause on hover
  scaleOnHover = true,
  fadeOut = true,
  fadeOutColor, // optional override
  ariaLabel = "Logo loop",
  vertical = false,
  useCustomRender = false,
  renderLogo, // optional: (logo) => ReactNode
}) {
  const rootRef = useRef(null);
  const trackRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [distance, setDistance] = useState(0); // width (or height for vertical)
  const [offset, setOffset] = useState(0);

  const dir = direction === "right" ? 1 : -1;
  const effectiveSpeed = isHovered ? hoverSpeed : speed;

  const mergedClassName = useMemo(() => {
    const c = ["logoloop"];
    if (vertical) c.push("logoloop--vertical");
    if (scaleOnHover) c.push("logoloop--scale-hover");
    if (fadeOut) c.push("logoloop--fade");
    return c.join(" ");
  }, [vertical, scaleOnHover, fadeOut]);

  useEffect(() => {
    if (!trackRef.current) return;

    // measure one list length (half of the track, since we render it twice)
    const measure = () => {
      const track = trackRef.current;
      const lists = track.querySelectorAll(".logoloop__list");
      if (!lists?.length) return;

      // first list size
      const first = lists[0];
      const rect = first.getBoundingClientRect();
      setDistance(vertical ? rect.height : rect.width);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [logos, gap, logoHeight, vertical]);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      if (distance > 0 && effectiveSpeed !== 0) {
        setOffset((prev) => {
          const next = prev + dir * effectiveSpeed * dt;
          // wrap seamlessly within one list length
          if (vertical) {
            const mod = next % distance;
            return mod;
          } else {
            const mod = next % distance;
            return mod;
          }
        });
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [distance, effectiveSpeed, dir, vertical]);

  const styleVars = {
    "--logoloop-gap": `${gap}px`,
    "--logoloop-logoHeight": `${logoHeight}px`,
    ...(fadeOutColor ? { "--logoloop-fadeColor": fadeOutColor } : {}),
  };

  const transform = vertical
    ? `translate3d(0, ${offset}px, 0)`
    : `translate3d(${offset}px, 0, 0)`;

  const renderNode = (logo, idx) => {
    // Custom render
    if (useCustomRender && typeof renderLogo === "function") {
      return renderLogo(logo);
    }

    // Icon node
    if (logo.node) {
      const node = (
        <span className="logoloop__node" aria-hidden="true">
          {logo.node}
        </span>
      );

      return logo.href ? (
        <a
          key={`${logo.title || "logo"}-${idx}`}
          className="logoloop__link"
          href={logo.href}
          target="_blank"
          rel="noreferrer"
          aria-label={logo.title || "Logo link"}
          title={logo.title}
        >
          {node}
        </a>
      ) : (
        <span key={`${logo.title || "logo"}-${idx}`} className="logoloop__node" title={logo.title}>
          {logo.node}
        </span>
      );
    }

    // Image
    if (logo.src) {
      const img = (
        <img
          src={logo.src}
          alt={logo.alt || ""}
          draggable={false}
          style={{ height: logoHeight }}
        />
      );

      return logo.href ? (
        <a
          key={`${logo.alt || "logo"}-${idx}`}
          className="logoloop__link"
          href={logo.href}
          target="_blank"
          rel="noreferrer"
          aria-label={logo.alt || "Logo link"}
          title={logo.alt}
        >
          {img}
        </a>
      ) : (
        <span key={`${logo.alt || "logo"}-${idx}`} className="logoloop__node">
          {img}
        </span>
      );
    }

    return null;
  };

  return (
    <div
      ref={rootRef}
      className={mergedClassName}
      style={styleVars}
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="logoloop__track" ref={trackRef} style={{ transform }}>
        {/* render list twice for seamless loop */}
        <div className="logoloop__list" aria-hidden="true">
          {logos.map((logo, idx) => (
            <div className="logoloop__item" key={`a-${idx}`}>
              {renderNode(logo, idx)}
            </div>
          ))}
        </div>
        <div className="logoloop__list" aria-hidden="true">
          {logos.map((logo, idx) => (
            <div className="logoloop__item" key={`b-${idx}`}>
              {renderNode(logo, idx)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
