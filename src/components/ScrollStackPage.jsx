// src/components/ScrollStackPage.jsx
import React from "react";
import Antigravity from "./Antigravity.jsx";
import ScrollStack, { ScrollStackItem } from "./ScrollStack.jsx";

const GlassPill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur-xl">
    {children}
  </span>
);

const LinkBtn = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-extrabold text-white/90 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/10"
  >
    {children} <span className="ml-2">↗</span>
  </a>
);

const StackCardBg = () => (
  <>
    {/* Gradient panel */}
    <div
      className="absolute inset-0 -z-10 rounded-[28px] opacity-90"
      style={{
        background:
          "radial-gradient(1200px 600px at 15% 10%, rgba(255,159,252,0.55), transparent 60%)," +
          "radial-gradient(900px 600px at 85% 30%, rgba(82,39,255,0.55), transparent 62%)," +
          "linear-gradient(135deg, rgba(255,159,252,0.18), rgba(82,39,255,0.18))",
      }}
    />
    {/* Glass / dark overlay for readability */}
    <div className="absolute inset-0 -z-10 rounded-[28px] bg-black/45 backdrop-blur-xl" />
    {/* Border */}
    <div className="absolute inset-0 -z-10 rounded-[28px] ring-1 ring-white/10" />
  </>
);




function SlideChrome({
  eyebrow,
  title,
  subtitle,
  children,
  tags = [],
  links = [],
}) {
  const StackCardBg = () => (
    <>
      <div
        className="absolute inset-0 -z-10 rounded-[28px] opacity-95"
        style={{
          background:
            "radial-gradient(1200px 700px at 15% 10%, rgba(255,159,252,0.65), transparent 60%)," +
            "radial-gradient(1000px 700px at 85% 30%, rgba(82,39,255,0.65), transparent 62%)," +
            "linear-gradient(135deg, rgba(255,159,252,0.18), rgba(82,39,255,0.18))",
        }}
      />
      <div className="absolute inset-0 -z-10 rounded-[28px] bg-black/45 backdrop-blur-xl" />
      <div className="absolute inset-0 -z-10 rounded-[28px] ring-1 ring-white/10" />
    </>
  );

  return (
    <section className="relative flex min-h-[100svh] w-full items-center px-4 sm:px-6 lg:px-10">
      {/* FULL-WIDTH card (no max-width container) */}
      <div className="relative w-full overflow-hidden rounded-[28px] p-6 sm:p-10 lg:p-12">
        <StackCardBg />

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* LEFT */}
          <div className="w-full">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              {eyebrow && <GlassPill>{eyebrow}</GlassPill>}
              {tags?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.slice(0, 10).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70 backdrop-blur"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
              {title}
            </h2>

            {subtitle && (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                {subtitle}
              </p>
            )}

            {links?.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-3">
                {links.map((l) => (
                  <LinkBtn key={l.href} href={l.href}>
                    {l.label}
                  </LinkBtn>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div className="w-full lg:pl-10 lg:border-l lg:border-white/10">
            {children && <div className="mt-2">{children}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}

function TitleSlide({ title, subtitle, hint }) {
  const StackCardBg = () => (
    <>
      <div
        className="absolute inset-0 -z-10 rounded-[28px] opacity-95"
        style={{
          background:
            "radial-gradient(1200px 700px at 15% 10%, rgba(255,159,252,0.65), transparent 60%)," +
            "radial-gradient(1000px 700px at 85% 30%, rgba(82,39,255,0.65), transparent 62%)," +
            "linear-gradient(135deg, rgba(255,159,252,0.18), rgba(82,39,255,0.18))",
        }}
      />
      <div className="absolute inset-0 -z-10 rounded-[28px] bg-black/45 backdrop-blur-xl" />
      <div className="absolute inset-0 -z-10 rounded-[28px] ring-1 ring-white/10" />
    </>
  );

  return (
    <section className="relative flex min-h-[100svh] w-full items-center px-4 sm:px-6 lg:px-10">
      {/* FULL-WIDTH intro card */}
      <div className="relative w-full overflow-hidden rounded-[28px] p-8 sm:p-12 lg:p-14">
        <StackCardBg />

        <div className="w-full text-center">
          <div className="mb-6 flex justify-center">
            <GlassPill>Selected work</GlassPill>
          </div>

          <h1 className="text-5xl font-black tracking-tight text-white sm:text-7xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
              {subtitle}
            </p>
          )}

          <div className="mt-12 text-xs font-semibold text-white/40">
            {hint || "Scroll ↓ (one slide at a time)"}
          </div>
        </div>
      </div>
    </section>
  );
}




export default function ScrollStackPage({
  title = "Page",
  subtitle = "",
  hint = "",
  items = [],
  antigravity = {
    enabled: true,
    opacity: 0.35,
    count: 220,
    color: "#FF9FFC",
  },
  renderItem,
  stackProps = {
  itemDistance: 270,
  itemScale: 0.03,
  itemStackDistance: 30,
  stackPosition: "20%",
  scaleEndPosition: "10%",
  baseScale: 0.9,
  rotationAmount: 0,
  blurAmount: 0,
  useWindowScroll: true, // ✅ IMPORTANT: removes internal scroller scrollbar
},
}) {
  const renderSlide = (item, idx) => {
    if (item.__type === "title") {
      return <TitleSlide title={title} subtitle={subtitle} hint={hint} />;
    }

    if (renderItem) return renderItem(item, idx);

    const bullets = item.bullets || [];
    const body = item.body;

    return (
      <SlideChrome
        eyebrow={item.eyebrow}
        title={item.title}
        subtitle={item.subtitle}
        tags={item.tags}
        links={item.links}
      >
        {body && (
          <div className="max-w-2xl text-base leading-relaxed text-white/70">
            {typeof body === "string" ? <p>{body}</p> : body}
          </div>
        )}

        {bullets.length > 0 && (
          <ul className="mt-6 max-w-2xl space-y-2 text-sm text-white/70">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-white/40" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </SlideChrome>
    );
  };

  const stackItems = [{ __type: "title" }, ...items.map((it) => ({ __type: "item", ...it }))];

  return (
    // Force a dark base so white text never disappears
    <div className="relative w-full bg-[#05050a] text-white">
      {/* Antigravity background */}
      {antigravity?.enabled && (
        <div
          className="pointer-events-none fixed inset-0 -z-10"
          style={{ opacity: antigravity.opacity ?? 0.35 }}
        >
          <Antigravity
            count={antigravity.count ?? 220}
            magnetRadius={6}
            ringRadius={7}
            waveSpeed={0.4}
            waveAmplitude={1}
            particleSize={1.2}
            lerpSpeed={0.06}
            color={antigravity.color ?? "#FF9FFC"}
            autoAnimate
            particleVariance={1}
            rotationSpeed={0}
            depthFactor={1}
            pulseSpeed={3}
            particleShape="capsule"
            fieldStrength={10}
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>
      )}

      {/* Stack sits above everything */}
      <div className="relative z-10">
        <ScrollStack {...stackProps}>
          {stackItems.map((it, idx) => (
            <ScrollStackItem key={`${it.__type}-${it.title ?? "title"}-${idx}`}>
              {renderSlide(it, it.__type === "title" ? -1 : idx - 1)}
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </div>
  );
}
