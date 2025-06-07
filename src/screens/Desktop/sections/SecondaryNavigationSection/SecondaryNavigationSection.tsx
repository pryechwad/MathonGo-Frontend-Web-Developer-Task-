import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const SecondaryNavigationSection = (): JSX.Element => {
  // Navigation items data for mapping
  const navigationItems = [
    {
      id: 1,
      title: "Physics PYQs",
      icon: "/subject-icons-3.svg",
      active: true,
    },
    {
      id: 2,
      title: "Chemistry PYQs",
      icon: "/subject-icons-1.svg",
      active: false,
    },
    {
      id: 3,
      title: "Mathematics PYQs",
      icon: "/subject-icons.svg",
      active: false,
    },
  ];

  return (
    <div className="flex flex-col w-[272px] h-full items-start bg-white">
      <div className="flex flex-col w-full items-start py-6 bg-white">
        <div className="flex flex-col items-start gap-4 w-full">
          <div className="flex items-center justify-center gap-4 w-full">
            <div className="relative w-6 h-6 [background:url(..//exam-logo.png)_50%_50%_/_cover]" />
            <div className="font-['Inter',Helvetica] font-bold text-[#101319] text-xl leading-6">
              JEE Main
            </div>
          </div>

          <div className="flex items-center justify-center gap-1 w-full">
            <div className="flex-1 font-body-xs-12 text-[#505d79] text-[length:var(--body-xs-12-font-size)] tracking-[var(--body-xs-12-letter-spacing)] leading-[var(--body-xs-12-line-height)]">
              2025 - 2009 | 173 Papers | 15825 Qs
            </div>
          </div>
        </div>
      </div>

      <Card className="border-0 shadow-none w-full">
        <CardContent className="flex flex-col items-start gap-4 pt-0 pb-4 px-0">
          {navigationItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className={`flex h-12 items-center gap-4 pl-4 pr-2 py-3 w-full rounded-xl justify-start ${
                item.active
                  ? "bg-[#1d2933] text-white"
                  : "bg-white text-[#101319]"
              }`}
            >
              <img
                className="w-6 h-6"
                alt={`${item.title} icon`}
                src={item.icon}
              />
              <span className="flex-1 font-label-sm-14 text-[length:var(--label-sm-14-font-size)] tracking-[var(--label-sm-14-letter-spacing)] leading-[var(--label-sm-14-line-height)]">
                {item.title}
              </span>
              <ChevronRightIcon className="w-5 h-5" />
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
