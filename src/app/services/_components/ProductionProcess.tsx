"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const productionStages = [
  {
    number: "01",
    title: "Development",
    statement: "Every production starts with a direction",
    description:
      "We work to understand the creative ambition behind each project and shape it into a clear, achievable production approach. From early concept and scripts to treatments, visual references and pitch materials, development connects the story with the practical decisions required to bring it to life.",
    capabilities: [
      "Concept & Story Development",
      "Treatments & Pitch Decks",
      "Creative Packaging",
      "Production Feasibility",
    ],
    objective:
      "Establish a shared creative direction and a clear foundation for production planning.",
  },
  {
    number: "02",
    title: "Pre-Production",
    statement: "Preparation creates room for creativity.",
    description:
      "Before cameras roll, we bring budgets, schedules, people and resources into alignment. Careful coordination across departments helps establish a production that is prepared for its creative demands, technical requirements and logistical challenges.",
    capabilities: [
      "Budgeting & Scheduling",
      "Casting & Crew Coordination",
      "Locations & Permits",
      "Technical Planning",
    ],
    objective:
      "Build a practical production plan that aligns creative priorities with resources, schedules and approvals.",
  },
  {
    number: "03",
    title: "Physical Production",
    statement: "Where planning meets the frame.",
    description:
      "This is where the creative vision becomes a working production. We coordinate crews, departments, equipment and daily operations while keeping communication clear decisions focused on the story, the schedule and the production's priorities.",
    capabilities: [
      "On-Set Production Management",
      "Department Coordination",
      "Production Logistics",
      "Creative Supervision",
    ],
    objective:
      "Maintain an organized and collaborative set where creative decisions and production requirements stay aligned.",
  },
  {
    number: "04",
    title: "Post-Production",
    statement: "The story takes its final shape.",
    description:
      "Once filming ends, we help guide the work through editorial and finishing. By coordinating post-production teams and workflows, we aim to preserve the creative direction while bringing picture, sound and technical requirements together",
    capabilities: [
      "Editing Supervision",
      "Sound & Color",
      "VFX Coordination",
      "Final Finishing",
    ],
    objective:
      "Preserve the creative intention through editorial decisions, finishing and technical preparation.",
  },
  {
    number: "05",
    title: "Delivery",
    statement: "Ready for its intended audience.",
    description:
      "The production process continues until the finished work is properly prepared for its destination. We coordinate mastering, quality checks, versions and technical deliverables according to the requirements of the project and its distribution channels.",
    capabilities: [
      "Mastering",
      "Quality Control",
      "Versioning",
      "Technical Deliverables",
    ],
    objective:
      "Prepare finished material according to the project's agreed technical and delivery requirements.",
  },
] as const;

export function ProductionProcess() {
  //! Accordion State only one open
  const [activeStage, setActiveStage] = useState<number | null>(0);

  function toggleStage(index: number) {
    setActiveStage((current) => (current === index ? null : index));
  }
  return (
    <section
      id="production-process"
      aria-labelledby="production-process-heading"
      className="bg-brand-maroon text-brand-beige"
    >
      <div className="container-editorial py-20 md:py-28 lg:py-32">
        {/* Section Intro */}
        <div className="mb-12 grid gap-8 md:mb-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-7 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange">
              03 / Our Process
            </p>

            <h2
              id="production-process-heading"
              className="max-w-7xl font-display text-[clamp(2.8rem,5.5vw,6.5rem)] leading-[1.02] tracking-[-0.035em]"
            >
              GOOD IDEAS <span className="text-brand-orange">NEED</span>
              <br />A WAY FORWARD
              <span className="text-brand-orange">.</span>
            </h2>
          </div>

          <p className="max-w-xl font-sans text-base leading-relaxed text-brand-beige/80 md:text-lg">
            From the first brief to final delivery, we approach production as
            one connected process. Every stage brings creative decisions,
            technical requirements and operational realities together to keep
            the project moving forward.
          </p>
        </div>

        {/* Accordion */}
        <ol className="list-none border-t border-brand-beige/25">
          {productionStages.map((stage, index) => {
            const isOpen = activeStage === index;

            const headingId = `production-stage-${stage.number}`;

            const panelId = `production-panel-${stage.number}`;

            return (
              <li key={stage.number} className="border-b border-brand-beige/25">
                <h3>
                  <button
                    id={headingId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleStage(index)}
                    className="group grid w-full grid-cols-[2.5rem_minmax(0,1fr)_2.5rem] items-center gap-x-4 py-7 text-left transition-colors duration-300 hover:text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,0.75fr)_3rem] md:gap-x-7 md:py-10 motion-reduce:transition-none"
                  >
                    {/* Stage Number */}
                    <span className="self-start pt-2 font-sans text-xs font-semibold tracking-[0.15em] text-brand-orange md:text-sm">
                      {stage.number}
                    </span>

                    {/* Stage Title */}
                    <span
                      className={`min-w-0 font-display text-[clamp(1.8rem,3.7vw,4.5rem)] leading-[1.06] transition-colors duration-300 motion-reduce:transition-none 
                        ${
                          isOpen
                            ? "text-brand-orange"
                            : "text-brand-beige group-hover:text-brand-beige"
                        }
                        `}
                    >
                      {stage.title}
                    </span>

                    {/* Short statement */}
                    <span className="hidden max-w-xs font-sans text-sm leading-relaxed text-brand-beige/65 md:block lg:text-base">
                      {stage.statement}
                    </span>

                    {/* Plus / Close Indicator */}
                    <span
                      className="flex size-9 items-center justify-center
                        justify-self-end
                        border border-brand-beige/35
                        text-brand-orange
                        transition-[transform,background-color,border-color] duration-500 ease-in-out
                        group-hover:border-brand-orange
                        md:size-11
                        motion-reduce:transition-none"
                    >
                      <ChevronDown
                        aria-hidden="true"
                        size={22}
                        strokeWidth={1.5}
                        className={`    ${isOpen ? "rotate-0" : "rotate-270"}`}
                      />
                    </span>
                  </button>
                </h3>

                {/* Expanded Content */}

                {/* EXPANDED CONTENT — SMOOTH ANIMATION */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                  className={`
    grid
    transition-[grid-template-rows,opacity]
    duration-500
    ease-in-out
    motion-reduce:transition-none
    ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
  `}
                >
                  {/* This wrapper allows the grid row to collapse smoothly */}
                  <div className="min-h-0 overflow-hidden">
                    <div
                      className="
        grid gap-8 pb-10
        md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
        md:gap-12 md:pb-14
        lg:pl-24
      "
                    >
                      {/* DESCRIPTION */}
                      <div className="max-w-2xl">
                        <p className="mb-5 font-sans text-lg font-semibold leading-snug text-brand-beige md:text-xl">
                          {stage.statement}
                        </p>

                        <p className="font-sans text-sm leading-relaxed text-brand-beige/75 md:text-base">
                          {stage.description}
                        </p>
                      </div>

                      {/* CAPABILITIES & OBJECTIVE */}
                      <div className="max-w-xl">
                        <p className="mb-5 font-sans text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">
                          What This Stage Covers
                        </p>

                        <ul className="grid list-none gap-3 sm:grid-cols-2">
                          {stage.capabilities.map((capability) => (
                            <li
                              key={capability}
                              className="border-l-2 border-brand-orange/75 pl-3 font-sans text-sm leading-relaxed text-brand-beige/85"
                            >
                              {capability}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-9 border-t border-brand-beige/20 pt-6">
                          <p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">
                            Stage Objective
                          </p>

                          <p className="font-sans text-sm leading-relaxed text-brand-beige/75 md:text-base">
                            {stage.objective}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
