"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useScroll } from "framer-motion";
import Overlay from "./Overlay";

interface ScrollyCanvasProps {
  totalFrames?: number;
}

export default function ScrollyCanvas({ totalFrames = 125 }: ScrollyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const animationFrameIdRef = useRef<number | null>(null);

  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isReady, setIsReady] = useState<boolean>(false);

  // Framer Motion useScroll tracks scroll within the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Render a specific frame onto the canvas with object-fit: cover logic
  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Fill #121212 background matching reference site
    ctx.fillStyle = "#121212";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // object-fit: cover math
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;
    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let renderWidth: number;
    let renderHeight: number;
    let offsetX: number;
    let offsetY: number;

    if (canvasRatio > imgRatio) {
      renderWidth = canvasWidth;
      renderHeight = canvasWidth / imgRatio;
      offsetX = 0;
      offsetY = (canvasHeight - renderHeight) / 2;
    } else {
      renderHeight = canvasHeight;
      renderWidth = canvasHeight * imgRatio;
      offsetX = (canvasWidth - renderWidth) / 2;
      offsetY = 0;
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
  }, []);

  // Resize canvas to window dimensions with Retina devicePixelRatio support
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
      canvas.width = Math.floor(displayWidth * dpr);
      canvas.height = Math.floor(displayHeight * dpr);
      canvas.style.width = `${displayWidth}px`;
      canvas.style.height = `${displayHeight}px`;

      renderFrame(currentFrameRef.current);
    }
  }, [renderFrame]);

  // Preload all frames on mount
  useEffect(() => {
    let isCancelled = false;
    let loaded = 0;
    const images: HTMLImageElement[] = [];

    const updateProgress = () => {
      loaded += 1;
      if (!isCancelled) {
        setLoadedCount(loaded);
        if (loaded >= Math.min(25, totalFrames)) {
          setIsReady(true);
        }
      }
    };

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      const paddedIndex = String(i).padStart(3, "0");
      img.src = `/sequence/frame_${paddedIndex}.webp`;

      img.onload = () => {
        updateProgress();
        if (i === 0) {
          renderFrame(0);
        }
      };

      img.onerror = () => {
        img.src = `/sequence/frame_${paddedIndex}_delay-0.067s.webp`;
        updateProgress();
      };

      images.push(img);
    }

    imagesRef.current = images;

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      isCancelled = true;
      window.removeEventListener("resize", handleResize);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [totalFrames, handleResize, renderFrame]);

  // Sync scrollYProgress to frame scrub via requestAnimationFrame
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const targetIndex = Math.min(
        totalFrames - 1,
        Math.max(0, Math.floor(latest * (totalFrames - 1)))
      );

      if (targetIndex !== currentFrameRef.current) {
        currentFrameRef.current = targetIndex;

        if (animationFrameIdRef.current) {
          cancelAnimationFrame(animationFrameIdRef.current);
        }

        animationFrameIdRef.current = requestAnimationFrame(() => {
          renderFrame(targetIndex);
        });
      }
    });

    return () => {
      unsubscribe();
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [scrollYProgress, totalFrames, renderFrame]);

  return (
    <section
      ref={containerRef}
      className="relative h-[500vh] w-full bg-[#121212]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas Scrubber */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover object-center block"
        />

        {/* Parallax Content Overlay */}
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}
