"use client"

import { useReveal } from "@/hooks/use-reveal"
import { useState, useEffect, useRef } from "react"

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState(0)
  const [desktopExpandedIndexes, setDesktopExpandedIndexes] = useState<Set<number>>(new Set([0]))

  return (
    <section
      ref={ref}
      className="relative flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-16 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-construction-site-with-digital-technology-o.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        ></div>

        <div className="space-y-2 md:space-y-4">
          {[
            {
              number: "01",
              title: "Automated Supply Chain Management",
              direction: "left",
              description:
                "We replace manual coordination with intelligent automation by integrating directly with your BIM, ERP, and project management systems. Our platform creates a 24/7 digital twin that autonomously coordinates materials and manpower, learning from real-time data to ensure resources arrive exactly when needed.",
            },
            {
              number: "02",
              title: "Digital Twins",
              direction: "right",
              description:
                "Intellibyld creates a live digital replica of your supply chain by connecting BIM, ERP, and project management systems. This twin monitors operations 24/7, tracking every delay to predict risks before they happen. Instead of just displaying data, it autonomously makes decisions to mitigate problems and learns from past outcomes to optimize future projects.",
            },
            {
              number: "03",
              title: "Agentic AI",
              direction: "left",
              description:
                "Moving beyond passive analytics, our Agentic AI uses Custom LLMs and Knowledge Graphs to autonomously forecast demand and execute procurement tasks without manual intervention. It optimizes decision-making by continuously learning from historical project data to refine future planning.",
            },
          ].map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              index={i}
              isVisible={isVisible}
              mobileExpandedIndex={mobileExpandedIndex}
              desktopExpandedIndexes={desktopExpandedIndexes}
              onMobileToggle={() => setMobileExpandedIndex(mobileExpandedIndex === i ? -1 : i)}
              onDesktopExpand={() => setDesktopExpandedIndexes((prev) => new Set([...prev, i]))}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isVisible,
  mobileExpandedIndex,
  desktopExpandedIndexes,
  onMobileToggle,
  onDesktopExpand,
}: {
  project: { number: string; title: string; category?: string; year: string; direction: string; description?: string }
  index: number
  isVisible: boolean
  mobileExpandedIndex: number
  desktopExpandedIndexes: Set<number>
  onMobileToggle: () => void
  onDesktopExpand: () => void
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && project.description) {
            onDesktopExpand()
          }
        })
      },
      {
        threshold: 0.5,
        rootMargin: "-100px",
      },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [project.description, isMobile, onDesktopExpand])

  const getRevealClass = () => {
    if (!isVisible) {
      return project.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  const isExpanded = isMobile ? mobileExpandedIndex === index : desktopExpandedIndexes.has(index)

  return (
    <div
      ref={cardRef}
      className={`group flex items-center justify-between border-b border-foreground/10 py-4 transition-all duration-700 hover:border-foreground/20 md:py-6 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
        marginLeft: index % 2 === 0 ? "0" : "auto",
        maxWidth: index % 2 === 0 ? "85%" : "90%",
      }}
    >
      <div className="flex items-baseline gap-4 md:gap-8">
        <span className="font-mono text-sm text-foreground/30 transition-colors group-hover:text-foreground/50 md:text-base">
          {project.number}
        </span>
        <div className="flex-1">
          <div
            className={`flex items-center gap-3 ${isMobile && project.description ? "cursor-pointer" : ""}`}
            onClick={() => isMobile && project.description && onMobileToggle()}
          >
            <h3 className="mb-1 font-sans text-xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-4xl lg:text-5xl">
              {project.title}
            </h3>
            {project.description && (
              <span className="text-2xl text-foreground/40 transition-transform duration-300">
                {isExpanded ? "−" : "+"}
              </span>
            )}
          </div>
          {project.category && <p className="font-mono text-xs text-foreground/50 md:text-sm">{project.category}</p>}
          {project.description && (
            <div
              className={`overflow-hidden transition-all duration-500 ${
                isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="mt-3 max-w-3xl font-sans text-base leading-relaxed text-foreground/70 md:text-lg">
                {project.description}
              </p>
            </div>
          )}
        </div>
      </div>
      <span className="font-mono text-xs text-foreground/30 md:text-sm">{project.year}</span>
    </div>
  )
}
