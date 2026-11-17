"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Slide = {
  src: string; // image inside /public
  alt: string;
  title?: string; // optional text on top of the image
  subtitle?: string;
};

// 3 banner images. Put the files in /public/
const slides: Slide[] = [
  { src: "/banner-1.png", alt: "Banner 1" },
  { src: "/banner-2.png", alt: "Banner 2" },
  { src: "/banner-3.png", alt: "Banner 3" },
];

const INTERVAL_MS = 5000; // time each slide stays

// Ratio of your banner images (width / height).
// Every slide gets this same ratio, so the banner height is always the same
// and no gap appears below a shorter image.
// Example: images exported at 1920 x 400 -> 1920 / 400.
const BANNER_WIDTH = 1920;
const BANNER_HEIGHT = 400;

export default function Banner() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + slides.length) % slides.length),
    []
  );

  // No auto-sliding for people who turned on "reduce motion"
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Auto slide (timer restarts after every manual change)
  useEffect(() => {
    if (paused || reducedMotion) return;
    const id = setInterval(next, INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, reducedMotion, next, index]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Banner"
      className="relative w-full overflow-hidden bg-neutral-200"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Slides track */}
      <div
        className="flex transition-transform duration-700 ease-in-out motion-reduce:transition-none"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`}
            aria-hidden={i !== index}
            className="relative w-full shrink-0"
            style={{ aspectRatio: `${BANNER_WIDTH} / ${BANNER_HEIGHT}` }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              priority={i === 0}
              className="object-cover"
            />

            {(slide.title || slide.subtitle) && (
              <>
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
                <div className="absolute inset-0 mx-auto flex max-w-7xl flex-col justify-center px-4 sm:px-6">
                  {slide.title && (
                    <h2 className="max-w-xl text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                      {slide.title}
                    </h2>
                  )}
                  {slide.subtitle && (
                    <p className="mt-3 max-w-lg text-base text-white/85 sm:text-lg">
                      {slide.subtitle}
                    </p>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Prev / Next */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-white sm:flex"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 5l-7 7 7 7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-white sm:flex"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={`h-2.5 rounded-full transition-all ${
              i === index
                ? "w-7 bg-white"
                : "w-2.5 bg-white/60 hover:bg-white/90"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
