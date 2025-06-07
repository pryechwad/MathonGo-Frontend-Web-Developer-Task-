import { ArrowUpDownIcon, ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

// Define chapter data for mapping
const chapters = [
  {
    id: 1,
    name: "Gravitation",
    icon: "/chapter-icon-2.svg",
    stats: {
      year2025: { count: "8Qs", trend: "up" },
      year2024: { count: "6Qs" },
      completion: "113/205 Qs",
    },
  },
  {
    id: 2,
    name: "Math in Physics",
    icon: "/chapter-icon-6.svg",
    stats: {
      year2025: { count: "2Qs", trend: "down" },
      year2024: { count: "6Qs" },
      completion: "113/205 Qs",
    },
  },
  {
    id: 3,
    name: "Units and Dimensions",
    icon: "/chapter-icon-5.svg",
    stats: {
      year2025: { count: "6Qs" },
      year2024: { count: "6Qs" },
      completion: "113/205 Qs",
    },
  },
  {
    id: 4,
    name: "Motion in One Dimension long name",
    icon: "/chapter-icon-7.svg",
    stats: {
      year2025: { count: "8Qs", trend: "up" },
      year2024: { count: "6Qs" },
      completion: "113/205 Qs",
    },
  },
  {
    id: 5,
    name: "Motion in Two Dimensions",
    icon: "/chapter-icon-1.svg",
    stats: {
      year2025: { count: "8Qs", trend: "up" },
      year2024: { count: "6Qs" },
      completion: "113/205 Qs",
    },
  },
  {
    id: 6,
    name: "Laws of Motion",
    icon: "/chapter-icon.svg",
    stats: {
      year2025: { count: "8Qs", trend: "up" },
      year2024: { count: "6Qs" },
      completion: "113/205 Qs",
    },
  },
  {
    id: 7,
    name: "Centre of Mass Equilibrium and Momentum",
    icon: "/chapter-icon-4.svg",
    stats: {
      year2025: { count: "8Qs", trend: "up" },
      year2024: { count: "6Qs" },
      completion: "113/205 Qs",
    },
  },
  {
    id: 8,
    name: "Work Power Energy",
    icon: "/chapter-icon-3.svg",
    stats: {
      year2025: { count: "8Qs", trend: "up" },
      year2024: { count: "6Qs" },
      completion: "113/205 Qs",
    },
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start bg-[#f2f5fb] border border-solid border-[#eaedf1]">
      <header className="flex flex-col w-full items-start pt-6 pb-4 px-0 bg-white z-10">
        <div className="flex items-start w-full bg-white">
          <div className="flex flex-col items-center gap-4 flex-1 grow">
            <div className="inline-flex items-center justify-center gap-4">
              <img
                className="w-6 h-6"
                alt="Subject icon"
                src="/subject-icons-2.svg"
              />
              <h1 className="w-fit mt-[-1.00px] font-['Inter',Helvetica] font-bold text-[#101319] text-xl text-center tracking-[0] leading-6 whitespace-nowrap">
                Physics PYQs
              </h1>
            </div>
            <p className="w-fit font-['Inter',Helvetica] font-normal text-[#505d79] text-sm text-right tracking-[0] leading-[18.2px] whitespace-nowrap">
              Chapter-wise Collection of Physics PYQs
            </p>
          </div>
          <div className="w-14 h-14" />
        </div>
      </header>

      <div className="flex w-full items-center gap-2 px-4 py-3 bg-white z-[2]">
        <Button
          variant="outline"
          className="flex items-center justify-center gap-0.5 p-1.5 bg-white rounded-xl border border-solid border-[#d1d8e0]"
        >
          <span className="font-label-sm-14 text-[#101319]">Class</span>
          <ChevronDownIcon className="w-5 h-5" />
        </Button>

        <Button
          variant="outline"
          className="flex items-center justify-center gap-0.5 p-1.5 bg-white rounded-xl border border-solid border-[#d1d8e0]"
        >
          <span className="font-label-sm-14 text-[#101319]">Units</span>
          <ChevronDownIcon className="w-5 h-5" />
        </Button>

        <Separator
          orientation="vertical"
          className="h-6 bg-[#d1d8e0] rounded-xl"
        />

        <Button
          variant="outline"
          className="flex items-center justify-center gap-0.5 p-1.5 bg-white rounded-xl border border-solid border-[#d1d8e0]"
        >
          <span className="font-label-sm-14 text-[#101319]">Not Started</span>
        </Button>

        <img
          className="min-w-8 min-h-8"
          alt="Chip button"
          src="/chip-button.svg"
        />
      </div>

      <div className="flex w-full min-h-12 items-center px-4 py-0 bg-white z-[1]">
        <div className="flex flex-col items-start justify-center gap-1 pl-0 pr-2 py-2 flex-1 grow">
          <p className="self-stretch mt-[-1.00px] font-14px-regular text-[#101319]">
            Showing all chapters (34)
          </p>
        </div>

        <div className="inline-flex items-center gap-1">
          <Button
            variant="ghost"
            className="h-9 flex items-center gap-0.5 px-0 py-2 rounded-[10px] border border-solid border-transparent"
          >
            <ArrowUpDownIcon className="w-5 h-5" />
            <span className="font-14px-medium text-[#0065de] text-center whitespace-nowrap">
              Sort
            </span>
          </Button>
        </div>
      </div>

      <div className="flex flex-col w-full items-start gap-4 p-4 bg-white z-0">
        {chapters.map((chapter) => (
          <Card
            key={chapter.id}
            className="flex items-center gap-4 p-4 w-full bg-white rounded-xl border border-solid border-[#d1d8e0]"
          >
            <CardContent className="flex items-center gap-4 p-0 w-full">
              <img
                className="w-6 h-6"
                alt={`${chapter.name} icon`}
                src={chapter.icon}
              />

              <div className="flex flex-col items-start gap-2 flex-1 grow">
                <div className="flex items-center gap-6 self-stretch w-full">
                  <h3 className="flex-1 mt-[-1.00px] font-label-base-16 text-[#101319]">
                    {chapter.name}
                  </h3>

                  <div className="inline-flex flex-col items-start gap-2 self-stretch">
                    <div className="w-fit mt-[-1.00px] font-body-xs-12 text-right whitespace-nowrap">
                      <span className="text-[#505d79]">2025: </span>
                      <span className="text-[#505d79]">
                        {chapter.stats.year2025.count}
                      </span>
                      {chapter.stats.year2025.trend === "up" && (
                        <span className="text-[#007f42]"> ↑</span>
                      )}
                      {chapter.stats.year2025.trend === "down" && (
                        <span className="text-[#e02a2f]"> ↓</span>
                      )}
                      <span className="text-[#505d79]"> | 2024: </span>
                      <span className="text-[#505d79]">
                        {chapter.stats.year2024.count}
                      </span>
                    </div>
                  </div>

                  <div className="w-fit font-body-xs-12 text-[#d1d8e0] text-right whitespace-nowrap">
                    |
                  </div>

                  <div className="w-fit font-body-xs-12 text-[#505d79] text-right whitespace-nowrap">
                    {chapter.stats.completion}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
