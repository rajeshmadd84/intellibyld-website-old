"use client"
import { useReveal } from "@/hooks/use-reveal"

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="relative flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-16 md:px-12 md:pt-0 lg:px-16"
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Left side - Story */}
          <div>
            <div
              className={`mb-4 transition-all duration-700 md:mb-12 ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
              }`}
            >
              <h2 className="mb-3 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground md:mb-4 md:text-6xl lg:text-7xl">
                The Only OS
                <br />
                <span className="text-foreground/40">That Remembers</span>
              </h2>
            </div>

            <div
              className={`space-y-2 transition-all duration-700 md:space-y-4 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-lg">
                Your current supply chain has amnesia. Every project starts from zero.
              </p>
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-lg">
                Intellibyld learns from your historical data—prices, delays, and vendor performance—to immunize your
                next project against the same mistakes.
              </p>
            </div>
          </div>

          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <h3 className="mb-6 text-2xl font-light text-foreground md:text-3xl lg:text-4xl">Our Team</h3>
            <div className="space-y-6">
              <div className="group">
                <div className="flex items-center gap-3">
                  <h4 className="text-lg font-medium text-foreground md:text-xl">Rajesh Maddineni</h4>
                  <a
                    href="https://www.linkedin.com/in/rajeshmaddineni/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground/60"
                    aria-label="Rajesh's LinkedIn profile"
                  >
                    <svg
                      className="h-5 w-5 md:h-6 md:w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
                <p className="text-sm text-foreground/60 md:text-base">CEO & Founder</p>
                
              </div>
              <div className="group">
                <div className="flex items-center gap-3">
                  <h4 className="text-lg font-medium text-foreground md:text-xl">Tharun Sai Kalimili</h4>
                  <a
                    href="https://www.linkedin.com/in/kalimili/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground/60"
                    aria-label="Tharun's LinkedIn profile"
                  >
                    <svg
                      className="h-5 w-5 md:h-6 md:w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
                <p className="text-sm text-foreground/60 md:text-base">CTO & Founder</p>
                
              </div>
              <div className="group">
                <div className="flex items-center gap-3">
                  <h4 className="text-lg font-medium text-foreground md:text-xl">Vishu Srujan Kolli</h4>
                  <a
                    href="https://www.linkedin.com/in/vishnu-srujan-k-370927112/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground/60"
                    aria-label="Tharun's LinkedIn profile"
                  >
                    <svg
                      className="h-5 w-5 md:h-6 md:w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
                <p className="text-sm text-foreground/60 md:text-base">CPO & Founder</p>
                
              </div>
              
              <div className="group">
                <div className="flex items-center gap-3">
                  <h4 className="text-lg font-medium text-foreground md:text-xl">Hari Sagaran</h4>
                  <a
                    href="https://www.linkedin.com/in/hari-sagaran/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground/60"
                    aria-label="Hari's LinkedIn profile"
                  >
                    <svg
                      className="h-5 w-5 md:h-6 md:w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
                <p className="text-sm text-foreground/60 md:text-base">CGO</p>
                
              </div>
              <div className="group">
                <div className="flex items-center gap-3">
                  <h4 className="text-lg font-medium text-foreground md:text-xl">Jidesh Kambil</h4>
                  <a
                    href="https://www.linkedin.com/in/jidesh-kambil-6a43a254/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground/60"
                    aria-label="Tharun's LinkedIn profile"
                  >
                    <svg
                      className="h-5 w-5 md:h-6 md:w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
                <p className="text-sm text-foreground/60 md:text-base">CSO (Sustianability)</p>
                
              </div>
               <div className="group">
                <div className="flex items-center gap-3">
                  <h4 className="text-lg font-medium text-foreground md:text-xl">Deepesh</h4>
                  
                </div>
                <p className="text-sm text-foreground/60 md:text-base">Data Science</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
