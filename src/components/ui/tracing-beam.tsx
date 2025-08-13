"use client";

import { cn } from "@/lib/utils";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useEffect, useId, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const TracingBeam: React.FC<Props> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll progress relatif ke kontainer outer
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Hitung tinggi konten untuk tinggi SVG
  const [svgHeight, setSvgHeight] = useState(0);
  useEffect(() => {
    if (!contentRef.current) return;
    const update = () => setSvgHeight(contentRef.current!.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(contentRef.current);
    return () => ro.disconnect();
  }, []);

  // Batas minimal biar tidak negatif
  const h = Math.max(svgHeight, 1);

  // Gradien bergerak mengikuti scroll
  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [50, h]), {
    stiffness: 500,
    damping: 90,
  });
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [50, Math.max(50, h - 200)]), {
    stiffness: 500,
    damping: 90,
  });

  // ID unik agar tidak bentrok jika komponen dipakai >1 kali
  const uid = useId();
  const gradientLeftId = `gradient-left-${uid}`;
  const gradientRightId = `gradient-right-${uid}`;

  const BULLET_SIZE = 16; // px -> h-4 w-4
  const BULLET_INSET = 27; // jarak dari tepi kontainer side

  const BeamSide = ({ side }: { side: "left" | "right" }) => {
    const isLeft = side === "left";
    const gradientId = isLeft ? gradientLeftId : gradientRightId;

    return (
      <div
        className={cn(
          "absolute top-3 hidden md:block",
          isLeft ? "-left-4 md:-left-20" : "-right-4 md:-right-20"
        )}
      >
        <div className="relative">
          {/* Bullet: absolute & center tepat di y=0 path */}
          <motion.div
            transition={{ duration: 0.2, delay: 0.5 }}
            animate={{
              boxShadow:
                scrollYProgress.get() > 0
                  ? "none"
                  : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
            className="h-4 w-4 rounded-full border border-neutral-200 shadow-sm flex items-center justify-center absolute"
            style={{
              top: -BULLET_SIZE / 2, // center ke y=0
              ...(isLeft ? { left: BULLET_INSET } : { right: BULLET_INSET }),
            }}
          >
            <motion.div
              transition={{ duration: 0.2, delay: 0.5 }}
              animate={{
                backgroundColor:
                  scrollYProgress.get() > 0 ? "white" : "var(--emerald-500)",
                borderColor:
                  scrollYProgress.get() > 0 ? "white" : "var(--emerald-600)",
              }}
              className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
            />
          </motion.div>

          {/* Garis */}
          <svg
            viewBox={`0 0 20 ${h}`}
            width="20"
            height={h}
            className={cn(isLeft ? "ml-4" : "mr-4", "block")}
            aria-hidden="true"
          >
            {/* Mirror horizontal untuk sisi kanan */}
            <g transform={isLeft ? undefined : "translate(20,0) scale(-1,1)"}>
              <motion.path
                d={`M 1 0V -36 l 18 24 V ${h * 0.8} l -18 24V ${h}`}
                fill="none"
                stroke="#9091A0"
                strokeOpacity="0.16"
              />
              <motion.path
                d={`M 1 0V -36 l 18 24 V ${h * 0.8} l -18 24V ${h}`}
                fill="none"
                stroke={`url(#${gradientId})`}
                strokeWidth="1.25"
                className="motion-reduce:hidden"
              />
            </g>

            <defs>
              <motion.linearGradient
                id={gradientId}
                gradientUnits="userSpaceOnUse"
                x1="0"
                x2="0"
                y1={y1 as unknown as number}
                y2={y2 as unknown as number}
              >
                <stop stopColor="#18CCFC" stopOpacity="0" />
                <stop stopColor="#18CCFC" />
                <stop offset="0.325" stopColor="#6344F5" />
                <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
              </motion.linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      ref={ref}
      className={cn("relative w-full max-w-4xl mx-auto h-full", className)}
    >
      <BeamSide side="left" />
      <BeamSide side="right" />
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};

export default TracingBeam;
