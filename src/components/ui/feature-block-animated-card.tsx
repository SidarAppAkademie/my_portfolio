"use client"

import { animate, motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import Image from 'next/image';

export interface AnimatedCardProps {
  className?: string
  title?: React.ReactNode
  description?: React.ReactNode
  icons?: Array<{
    icon: React.ReactNode
    className?: string
  }>
}

export function AnimatedCard({ className, title, description, icons = [] }: AnimatedCardProps) {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      <div
        className={cn(
          "h-[12rem] md:h-[15rem] rounded-xl z-0 relative overflow-hidden",
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
        )}
      >
        <AnimatedIcons icons={icons} />
         <AnimatedSparkles />
      </div>
      {title && (
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white py-2">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm">
          {description}
        </p>
      )}
    </div>
  )
}

function AnimatedIcons({ icons }: { icons: AnimatedCardProps["icons"] }) {
  const scale = [1, 1.1, 1]
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"]
  
  const sequence = icons?.map((_, index) => [
    `.circle-${index + 1}`,
    { scale, transform },
    { duration: 0.8 },
  ])

  useEffect(() => {
    if (sequence) {
        // @ts-ignore
        animate(sequence, {
            repeat: Infinity,
            repeatDelay: 1,
        })
    }
  }, [sequence])

  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center z-10">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-4">
        {icons?.map((icon, index) => (
          <Container
            key={index}
            className={cn(
              `circle-${index + 1}`,
              icon.className
            )}
          >
           {React.isValidElement(icon.icon) ?
              React.cloneElement(icon.icon as React.ReactElement, {
                className: "h-8 w-8"
              })
              : null
            }
          </Container>
        ))}
      </div>
    </div>
  )
}

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      `h-12 w-12 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
      shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]`,
      className
    )}
    {...props}
  />
))
Container.displayName = "Container"

const AnimatedSparkles = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-full h-px absolute top-1/2 left-0 z-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-move-horizontal">
      <div className="w-full h-10 absolute -top-5 overflow-hidden">
        {isClient && <Sparkles />}
      </div>
    </div>
  );
};

const Sparkles = () => {
  const [sparkles, setSparkles] = useState(() => 
    Array.from({ length: 12 }).map(() => ({
      id: Math.random(),
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      moveX: Math.random() * 2 - 1,
      moveY: Math.random() * 2 - 1,
      opacity: Math.random(),
      duration: Math.random() * 2 + 4,
    }))
  );

  return (
    <div className="absolute inset-0">
      {sparkles.map((sparkle) => (
        <motion.span
          key={sparkle.id}
          animate={{
            top: `calc(${sparkle.top} + ${sparkle.moveY}px)`,
            left: `calc(${sparkle.left} + ${sparkle.moveX}px)`,
            opacity: sparkle.opacity,
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: sparkle.top,
            left: sparkle.left,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        />
      ))}
    </div>
  )
}
